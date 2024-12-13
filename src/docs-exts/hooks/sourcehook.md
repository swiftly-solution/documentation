---
title: SourceHook
index: true
order: 2
category:
  - Guide
---

# SourceHook

SourceHook is a hooking method provided via [metamod-source](https://github.com/alliedmodders/metamod-source) to detour functions from classes. This hooking method supports only functions which are being called from the main thread. Otherwise, the server would crash.

## How to hook a function?

### Idenfity the function

We need to identify the function from the class, let's say that we're gonna hook `GameFrame` function which is being provided by `IServerGameDLL`.

- [IServerGameDLL](https://github.com/alliedmodders/hl2sdk/blob/cs2/public/eiface.h#L383-L482)

As we see, the `GameFrame` definition is:

```cpp title="eiface.h"
abstract_class ISource2Server : public IAppSystem
{
public:
    // ...

    // The server should run physics/think on all edicts
	// One of these bools is 'simulating'... probably
	virtual void			GameFrame( bool simulating, bool bFirstTick, bool bLastTick ) = 0;

    // ...
};

typedef ISource2Server IServerGameDLL;
```

First, we need to declare the hook function via: 

```cpp
SH_DECL_HOOK<N>[_void](class, function_name, SH_NOATTRIB, 0, args...)
```

In the above definition, \<N> represents the number of arguments, and \[_void] is being mandatory just for void functions.

```cpp title="entrypoint.cpp"
SH_DECL_HOOK3_void(IServerGameDLL, GameFrame, SH_NOATTRIB, 0, bool, bool, bool);
```

> [!note]
> In case the function you want to hook is having a return value, in args the first argument is the return value.
>
> Example: SH_DECL_HOOK\<N>(class, function_name, SH_NOATTRIB, 0, ret_type, args...)

> [!note]
> In case you want to hook the function from another file, and you're already using it inside a file, you can use EXTERN instead of HOOK.
>
> Example: SH_DECL_EXTERN\<N>\[_void](...)

### Fetch the class pointer

We need to get the pointer for the class, to do that check out [Interfaces](/docs-exts/interfaces/get-interface.html).

We're gonna see that it uses the `server` variable, having interface `INTERFACEVERSION_SERVERGAMEDLL` and class `ISource2Server`.

```cpp title="entrypoint.cpp"
bool EXTENSION::Load(std::string& error, SourceHook::ISourceHook *SHPtr, ISmmAPI* ismm, bool late)
{
    // ...
    GET_IFACE_ANY(GetServerFactory, server, ISource2Server, INTERFACEVERSION_SERVERGAMEDLL);
    // ...
    return true;
}
```

### Hook the function

We need to detour now the function to one which is existent in our code. To do that, we add to the main extension class the definition of `GameFrame`.

```cpp title="entrypoint.h"
class EXTENSION
{
public:
    // ...
    void Hook_GameFrame(bool simulating, bool bFirstTick, bool bLastTick);
    // ...
}
```

Next, we need to add to the load the hooking function, and also define our own hook function.
To hook the function, we're gonna use `SH_ADD_HOOK_MEMFUNC` which has the following definition:

```cpp
SH_ADD_HOOK_MEMFUNC(class, function_name, pointer, this, &EXTENSION::HookFunction, post);
```

To add a detour after the hooked function has been executed, you need to set the post to `true`, otherwise `false`.

```cpp title="entrypoint.cpp"
bool EXTENSION::Load(std::string& error, SourceHook::ISourceHook *SHPtr, ISmmAPI* ismm, bool late)
{
    // ...
    GET_IFACE_ANY(GetServerFactory, server, ISource2Server, INTERFACEVERSION_SERVERGAMEDLL);

    // The hook will be executed after the server executes the code inside GameFrame
    SH_ADD_HOOK_MEMFUNC(IServerGameDLL, GameFrame, server, this, &EXTENSION::Hook_GameFrame, true);
    // ...
    return true;
}

void EXTENSION::Hook_GameFrame(bool simulating, bool bFirstTick, bool bLastTick)
{
    g_SMAPI->ConPrintf("GameFrame has been called.\n");
}
```

### Unhook the function

To unhook the function, we're gonna use `SH_REMOVE_HOOK_MEMFUNC` which has the following definition:

```cpp
SH_REMOVE_HOOK_MEMFUNC(class, function_name, pointer, this, &EXTENSION::HookFunction, post);
```

We need to remove the hook on extension unload, or whenever we want to unload the hook.

```cpp title="entrypoint.cpp"
bool EXTENSION::Unload(std::string& error)
{
    // ...

    SH_REMOVE_HOOK_MEMFUNC(IServerGameDLL, GameFrame, server, this, &EXTENSION::Hook_GameFrame, true);

    // ...
    return true;
}
```

### Return

Returns are having 4 modes is a function from SourceHook which is changing the behaviour of the hooked function.

```cpp
MRES_IGNORED,		// plugin didn't take any action
MRES_HANDLED,		// plugin did something, but real function should still be called
MRES_OVERRIDE,		// call real function, but use my return value
MRES_SUPERCEDE		// skip real function; use my return value
```

#### Types of return

::: tabs
@tab RETURN_META

`RETURN_META` is for `void` hooked functions.

#### Syntax
```cpp
RETURN_META(mode);
```

#### Example

```cpp
RETURN_META(MRES_OVERRIDE);
```

@tab RETURN_META_VALUE

`RETURN_META_VALUE` is for hooked functions which are not `void`.

#### Syntax
```cpp
RETURN_META_VALUE(mode, value);
```

**(!)** The value will be considered only when `MRES_OVERRIDE`, `MRES_SUPERCEDE` are being set as mode.

#### Example

```cpp
RETURN_META_VALUE(MRES_OVERRIDE, false);
```

@tab RETURN_META_NEWPARAMS

`RETURN_META_NEWPARAMS` is for `void` hooked functions to change the params of the hook.

#### Syntax
```cpp
RETURN_META_NEWPARAMS(mode, function_ptr, newparams);
```

#### Example

```cpp
RETURN_META_NEWPARAMS(MRES_IGNORED, &IServerGameDLL::GameFrame, (false, false, false));
```

@tab RETURN_META_VALUE_NEWPARAMS

`RETURN_META_VALUE_NEWPARAMS` is for hooked functions which are not `void` to change the params of the hook.

#### Syntax
```cpp
RETURN_META_VALUE_NEWPARAMS(mode, value, function_ptr, newparams);
```

#### Example

```cpp
RETURN_META_VALUE_NEWPARAMS(MRES_IGNORED, bListen, &IVEngineServer2::SetClientListening, (CPlayerSlot(5), CPlayerSlot(6), true));
```

:::

### Example Extension

An example extension which uses SourceHook is: [http-extension](https://github.com/swiftly-solution/http-extension).
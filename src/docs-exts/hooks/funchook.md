---
title: FuncHook
index: true
order: 2
category:
  - Guide
---

# FuncHook

FuncHook is a hooking method provided by [Swiftly Extensions](https://github.com/swiftly-solution/base-extension). This hooking method supports single-threaded and multi-threaded functions.

## How can a function be hooked?

A function can be hooked via 2 methods:

### Signature

This method requires the developer to know the signature of the function, set it into a `signatures.json` file from `gamedata` and specify the name inside the code.

The definition for this is:

```cpp
FuncHook<function_decltype> HOOK_NAME(function, "signature_name");
```

### VTable

This method requires the developer to know the module, the VTable name and the offset of the function. The offset needs to be set inside an `offsets.json` file from `gamedata`.

The definition for this is:

```cpp
FuncHook<function_decltype> HOOK_NAME(function, "module", "vtable_name", "offset_name");
```

## How to hook a function?

We need to know the function definition first. For example, we're gonna hook `CLoggingSystem_LogDirect`.

```cpp
int CLoggingSystem_LogDirect(void* _this, int chan, int severity, LeafCodeInfo_t* leafCode, LoggingMetaData_t* meta, Color color, char const* str, va_list* args);
```

We're gonna use the signature method, so we need to add the signature inside a `signatures.json` file.

**(!)** This signature may become invalid over time.

```json title="signatures.json"
{
    "CLoggingSystem_LogDirect": {
        "lib": "tier0",
        "windows": "4C 89 4C 24 20 44 89 44 24 18 89 54 24 10 55",
        "linux": "55 89 D0 48 89 E5 41 57 41 56 41 55"
    }
}
```

### Hook the function

To hook the function, we need to add the FuncHook line inside the `entrypoint.cpp` file after the definition of the variable `g_vecHooks`:

```cpp title="entrypoint.cpp"
CANNOT_CREATE_HOOKS
// ...
CUtlVector<FuncHookBase *> g_vecHooks;
// ...
ALLOWED_ZONE_TO_CREATE_HOOKS
```

If you do create the hook before the variable definition, the hook will not be registered.

```cpp title="entrypoint.cpp"
// The function definition for the hook
int CLoggingSystem_LogDirect(void* _this, int chan, int severity, LeafCodeInfo_t* leafCode, LoggingMetaData_t* meta, Color color, char const* str, va_list* args);
// ...
CUtlVector<FuncHookBase *> g_vecHooks;
// ...
FuncHook<decltype(Hook_CLoggingSystem_LogDirect)> CLoggingSystem_LogDirect(Hook_CLoggingSystem_LogDirect, "CLoggingSystem_LogDirect");
```

Next, we need to use the actual hook, so:

```cpp title="entrypoint.cpp"
int Hook_CLoggingSystem_LogDirect(void* _this, int chan, int severity, LeafCodeInfo_t* leafCode, LoggingMetaData_t* meta, Color color, char const* str, va_list* args)
{
    g_SMAPI->ConPrintf("This function has been called.\n");
    return 1;
}
```

### Call the original function

To call the original function, we need to use the `HOOK_NAME` specified when we declared the FuncHook.

```cpp title="entrypoint.cpp"
int Hook_CLoggingSystem_LogDirect(void* _this, int chan, int severity, LeafCodeInfo_t* leafCode, LoggingMetaData_t* meta, Color color, char const* str, va_list* args)
{
    g_SMAPI->ConPrintf("This function has been called.\n");
    return CLoggingSystem_LogDirect(_this, chan, severity, leafCode, meta, color, str, args);
}
```

### Unhook the function

To unhook the function, we don't need to do anything, because the function will be automatically unhooked once the extension stops.

The [Base Extension](https://github.com/swiftly-solution/base-extension) is coming by default with everything needed to just use the above explanations to hook functions.

### Example Extension

An example extension which uses FuncHook is: [console-filter](https://github.com/swiftly-solution/console-filter).
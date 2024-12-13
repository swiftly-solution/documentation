---
title: Functions - Lua
index: true
order: 2
category:
  - Guide
---

# Functions - Lua

To define functions in scripting, obviously, you need a function to expose to the scripting.

```cpp title="entrypoint.cpp"
// ...
int Function1(int a, int b, int c)
{
    g_SMAPI->ConPrintf("%d, %d, %d\n", a, b, c);
    return 6666;
}
// ...
```

Now that we have all we need, let's jump inside the entrypoint to define the function in plugins.

We need to add the definition of the function inside `OnPluginLoad`, include the default `Lua` libraries and `LuaBridge`.

```cpp title="entrypoint.cpp"
#include <lua/lua.h>
#include <lua/lauxlib.h>
#include <lua/lualib.h>
#include <LuaBridge/LuaBridge.h>
// ...
int Function1(int a, int b, int c)
{
    // ...
}
// ...
bool EXTENSION::OnPluginLoad(std::string pluginName, void* pluginState, PluginKind_t kind, std::string& error)
{
    if(kind == PluginKind_t::Lua) {
        // We first need to save the lua state into a variable.
        lua_State* state = (lua_State*)pluginState;

        // Now we need to access the global namespace and begin our work with the function.
        luabridge::getGlobalNamespace(state)
            // Now we need to define our function
            .addFunction("Function1", &Function1);
    }
    return true;
}
```

### Example usage inside plugins

```lua title="script.lua"
print(Function1(5, 2, 1)) -- it will print "6666"
```

And done! You've managed to expose a function into scripting via LuaBridge.

To read and learn more about LuaBridge, check out their documentation which is available [right here](http://vinniefalco.github.io/LuaBridge/Manual.html).
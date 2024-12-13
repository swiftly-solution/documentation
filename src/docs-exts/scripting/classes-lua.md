---
title: Classes - Lua
index: true
order: 2
category:
  - Guide
---

# Classes - Lua

To define classes in scripting, obviously, you need a class inside the extension to expose to the scripting.

```cpp title="myclass.h"
#ifndef _myclass_h
#define _myclass_h

#include <string>

class MyClass
{
public:
    MyClass();
    ~MyClass();

    void Func1(int a, int b);
    std::string Func2(float a, std::string b, int c);
    // ...
};

#endif
```

Now, let's create the source file for our class:

```cpp title="myclass.cpp"
#include "entrypoint.h"
#include "myclass.h"

MyClass::MyClass()
{
    g_SMAPI->ConPrintf("An instance of MyClass has been created.\n");
}

MyClass::~MyClass()
{
    g_SMAPI->ConPrintf("An instance of MyClass has been deleted.\n");
}

void MyClass::Func1(int a, int b)
{
    g_SMAPI->ConPrintf("Func1 has been called and received the following arguments: %d, %d.\n", a, b);
}

std::string MyClass::Func2(float a, std::string b, int c)
{
    g_SMAPI->ConPrintf("Func2 has been called and received the following arguments: %f, %s, %d.\n", a, b.c_str(), c)`;
    return "string returned from the extension";
}

// ...
```

Now that we have all we need, let's jump inside the entrypoint to define the classes in plugins.

We need to add the definition of the class inside `OnPluginLoad`, include the default `Lua` libraries, `LuaBridge`, and the header file for the class.

```cpp title="entrypoint.cpp"
#include <lua/lua.h>
#include <lua/lauxlib.h>
#include <lua/lualib.h>
#include <LuaBridge/LuaBridge.h>
#include "myclass.h"
// ...
bool EXTENSION::OnPluginLoad(std::string pluginName, void* pluginState, PluginKind_t kind, std::string& error)
{
    if(kind == PluginKind_t::Lua) {
        // We first need to save the lua state into a variable.
        lua_State* state = (lua_State*)pluginState;

        // Now we need to access the global namespace and begin our work with the class.
        luabridge::getGlobalNamespace(state)
            // Start the definition of the class.
            .beginClass<MyClass>("MyClassName")
            // Define the class constructor. In between \<> we need to set the declaration type of the constructor.
            .addConstructor<void(*)()>()
            // Now we need to define our functions
            .addFunction("Func1", &MyClass::Func1)
            .addFunction("Func2", &MyClass::Func2)
            // Stop the definition of the class.
            .endClass();
    }
    return true;
}
```

### Example usage inside plugins

```lua title="script.lua"
local cls = MyClassName()

cls:Func1(5, 21)

print(cls:Func2(5.555, "test message", 7)) -- it will print "string returned from the extension"
```

And done! You've managed to expose a class into scripting via LuaBridge.

To read and learn more about LuaBridge, check out their documentation which is available [right here](http://vinniefalco.github.io/LuaBridge/Manual.html).
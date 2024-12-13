---
title: OnPluginUnload
index: true
order: 2
category:
  - Guide
---

# OnPluginUnload

OnPluginUnload function is being called when a plugin is being unloaded.

```cpp
bool EXTENSION::OnPluginUnload(std::string pluginName, void* pluginState, PluginKind_t kind, std::string& error);
```

- [PluginKind_t](/docs-exts/types/PluginKind_t.html)

## How to make the plugin give an error on unload?

To make the plugin give an error, you need to return `false` and also set the error message inside error variable, otherwise return `true`.

```cpp
bool EXTENSION::OnPluginUnload(std::string pluginName, void* pluginState, PluginKind_t kind, std::string& error)
{
    error = "Error Message";
    return false;
}
```
---
title: OnPluginLoad
index: true
order: 2
category:
  - Guide
---

# OnPluginLoad

OnPluginLoad function is being called when a plugin is being loaded.

```cpp
bool EXTENSION::OnPluginLoad(std::string pluginName, void* pluginState, PluginKind_t kind, std::string& error);
```

- [PluginKind_t](/docs-exts/types/PluginKind_t.html)

## How to make the plugin give an error on load?

To make the plugin give an error, you need to return `false` and also set the error message inside error variable, otherwise return `true`.

```cpp
bool EXTENSION::OnPluginLoad(std::string pluginName, void* pluginState, PluginKind_t kind, std::string& error)
{
    error = "Error Message";
    return false;
}
```
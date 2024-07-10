---
title: Getting Started
icon: book
order: 1
index: true
category:
  - Guide
---

# Getting Started

::: tabs

@tab Lua

## Mandatory Functions

Below will be listed the mandatory functions needed in any Swiftly Lua Plugin, in a single plugin file.

### GetPluginAuthor

```lua
function GetPluginAuthor()
    return "AUTHOR"
end
```

### GetPluginVersion

```lua
function GetPluginVersion()
    return "VERSION"
end
```

### GetPluginName

```lua
function GetPluginName()
    return "PLUGIN_NAME"
end
```

### GetPluginWebsite

```lua
function GetPluginWebsite()
    return "WEBSITE"
end
```

:::
---
title: Lua Plugin
order: 1
index: true
category:
  - Guide
---

# Lua Plugin

To get started you need to create a folder in `addons/swiftly/plugins` with the plugin name and inside the folder create a lua file with any name.

Inside of that file you need to set the mandatory functions for any plugin and you're ready to go.

### Example

```lua title="main.lua"
function GetPluginAuthor()
    return "SkuZZi"
end

function GetPluginVersion()
    return "1.0.0"
end

function GetPluginName()
    return "Brand New Lua Plugin"
end

function GetPluginWebsite()
    return "https://docs.swiftlycs2.net"
end
```

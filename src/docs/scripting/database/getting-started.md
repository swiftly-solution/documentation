---
title: Getting Started
index: true
order: 1
category:
  - Guide
---

# Getting Started
To use the Swiftly Database system you need the following code in your plugin.

> [!warning]
> Don't forget to replace CONNECTION_NAME with your own connection name.

::: tabs
@tab Lua
```lua
events:on("OnPluginStart", function()
    db = Database("CONNECTION_NAME")
end)
```
:::
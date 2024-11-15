---
title: RegisterTemporary
index: true
order: 2
category:
  - Guide
---

# RegisterTemporary
Registers a temporary menu by a specific ID.
::: tabs
@tab Lua
```lua
--- @param id string
--- @param title string
--- @param color string
--- @param options table
--- @return nil
menus:RegisterTemporary(id, title, color, options)
```
> [!info]
> The color needs to be a hex string by the model RRGGBB.

> Example: 344CEB 

> [!warning]
> The options needs to be a pair of strings.

```lua
{
    { "option 1", "value 1" },
    { "option 2", "value 2" },
    -- ...
}
```
> [!warning]
> The value can be replaced with a command from Swiftly and it's arguments, or it can be replaced with a menu id to open another menu.
> The value can be also a blank string to not execute anything when it's selected. 

:::
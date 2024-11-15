---
title: OnHostageRescued
index: true
order: 2
category:
  - Guide
---

# OnHostageRescued
This event is triggered when hostage_rescued is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number EventResult
AddEventHandler("OnHostageRescued", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key    | Data Type |
| :-------: | :-------: |
|  `userid` |   `int`   |
| `hostage` |   `int`   |
|   `site`  |   `int`   |
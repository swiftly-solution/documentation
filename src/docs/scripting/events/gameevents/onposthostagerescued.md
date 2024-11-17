---
title: OnPostHostageRescued
index: true
order: 2
category:
  - Guide
---

# OnPostHostageRescued
This event is triggered after hostage_rescued is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number|nil EventResult
AddEventHandler("OnPostHostageRescued", function(event)
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
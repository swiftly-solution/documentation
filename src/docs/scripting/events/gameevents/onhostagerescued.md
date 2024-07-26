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
@event returns void
AddEventHandler("OnHostageRescued", function(event --[[ Event ]])
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
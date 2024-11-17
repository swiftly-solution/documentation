---
title: OnPostDoorMoving
index: true
order: 2
category:
  - Guide
---

# OnPostDoorMoving
This event is triggered after door_moving is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number|nil EventResult
AddEventHandler("OnPostDoorMoving", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|     Key    | Data Type |
| :--------: | :-------: |
|  `userid`  |   `int`   |
| `entindex` |   `int`   |
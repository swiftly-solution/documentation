---
title: OnDoorMoving
index: true
order: 2
category:
  - Guide
---

# OnDoorMoving
This event is triggered when door_moving is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number EventResult
AddEventHandler("OnDoorMoving", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|     Key    | Data Type |
| :--------: | :-------: |
|  `userid`  |   `int`   |
| `entindex` |   `int`   |
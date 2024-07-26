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
@event returns void
AddEventHandler("OnDoorMoving", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|     Key    | Data Type |
| :--------: | :-------: |
|  `userid`  |   `int`   |
| `entindex` |   `int`   |
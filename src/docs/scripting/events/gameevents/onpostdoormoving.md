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
@event returns void
AddEventHandler("OnPostDoorMoving", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|     Key    | Data Type |
| :--------: | :-------: |
|  `userid`  |   `int`   |
| `entindex` |   `int`   |
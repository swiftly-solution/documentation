---
title: OnDoorBreak
index: true
order: 2
category:
  - Guide
---

# OnDoorBreak
This event is triggered when door_break is triggered.
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnDoorBreak", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|     Key    | Data Type |
| :--------: | :-------: |
| `entindex` |   `int`   |
| `dmgstate` |   `int`   |
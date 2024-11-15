---
title: OnPostDoorBreak
index: true
order: 2
category:
  - Guide
---

# OnPostDoorBreak
This event is triggered after door_break is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number EventResult
AddEventHandler("OnPostDoorBreak", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|     Key    | Data Type |
| :--------: | :-------: |
| `entindex` |   `int`   |
| `dmgstate` |   `int`   |
---
title: OnDoorOpen
index: true
order: 2
category:
  - Guide
---

# OnDoorOpen
This event is triggered when door_open is triggered
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnDoorOpen", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|     Key    | Data Type |
| :--------: | :-------: |
| `entindex` |   `int`   |
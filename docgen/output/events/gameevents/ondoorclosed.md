---
title: OnDoorClosed
index: true
order: 2
category:
  - Guide
---

# OnDoorClosed
This event is triggered when door_closed is triggered
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnDoorClosed", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|     Key    | Data Type |
| :--------: | :-------: |
| `entindex` |   `int`   |
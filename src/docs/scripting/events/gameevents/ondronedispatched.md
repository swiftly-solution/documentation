---
title: OnDroneDispatched
index: true
order: 2
category:
  - Guide
---

# OnDroneDispatched
This event is triggered when drone_dispatched is triggered
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnDroneDispatched", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|         Key        | Data Type |
| :----------------: | :-------: |
|      `userid`      |   `int`   |
|     `priority`     |   `int`   |
| `drone_dispatched` |   `int`   |
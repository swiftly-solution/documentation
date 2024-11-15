---
title: OnPostDroneDispatched
index: true
order: 2
category:
  - Guide
---

# OnPostDroneDispatched
This event is triggered after drone_dispatched is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number EventResult
AddEventHandler("OnPostDroneDispatched", function(event)
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
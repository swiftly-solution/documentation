---
title: OnPostDroneCargoDetached
index: true
order: 2
category:
  - Guide
---

# OnPostDroneCargoDetached
This event is triggered after drone_cargo_detached is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number EventResult
AddEventHandler("OnPostDroneCargoDetached", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|     Key     | Data Type |
| :---------: | :-------: |
|   `userid`  |   `int`   |
|   `cargo`   |   `int`   |
| `delivered` | `boolean` |
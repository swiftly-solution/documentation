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
@event returns void
AddEventHandler("OnPostDroneCargoDetached", function(event --[[ Event ]])
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
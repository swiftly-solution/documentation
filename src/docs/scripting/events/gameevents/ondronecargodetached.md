---
title: OnDroneCargoDetached
index: true
order: 2
category:
  - Guide
---

# OnDroneCargoDetached
This event is triggered when drone_cargo_detached is triggered.
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnDroneCargoDetached", function(event --[[ Event ]])
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
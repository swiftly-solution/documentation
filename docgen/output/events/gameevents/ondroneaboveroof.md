---
title: OnDroneAboveRoof
index: true
order: 2
category:
  - Guide
---

# OnDroneAboveRoof
This event is triggered when drone_above_roof is triggered.
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnDroneAboveRoof", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
| `userid` |   `int`   |
|  `cargo` |   `int`   |
---
title: OnPostDroneAboveRoof
index: true
order: 2
category:
  - Guide
---

# OnPostDroneAboveRoof
This event is triggered after drone_above_roof is triggered.
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnPostDroneAboveRoof", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
| `userid` |   `int`   |
|  `cargo` |   `int`   |
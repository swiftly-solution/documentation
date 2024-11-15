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
--- @param event Event
--- @return number EventResult
AddEventHandler("OnPostDroneAboveRoof", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
| `userid` |   `int`   |
|  `cargo` |   `int`   |
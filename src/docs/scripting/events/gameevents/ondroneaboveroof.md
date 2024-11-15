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
--- @param event Event
--- @return number EventResult
AddEventHandler("OnDroneAboveRoof", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
| `userid` |   `int`   |
|  `cargo` |   `int`   |
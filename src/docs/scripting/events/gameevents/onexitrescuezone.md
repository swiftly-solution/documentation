---
title: OnExitRescueZone
index: true
order: 2
category:
  - Guide
---

# OnExitRescueZone
This event is triggered when exit_rescue_zone is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number|nil EventResult
AddEventHandler("OnExitRescueZone", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
| `userid` |   `int`   |
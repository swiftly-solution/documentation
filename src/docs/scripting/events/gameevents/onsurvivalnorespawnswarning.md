---
title: OnSurvivalNoRespawnsWarning
index: true
order: 2
category:
  - Guide
---

# OnSurvivalNoRespawnsWarning
This event is triggered when survival_no_respawns_warning is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number|nil EventResult
AddEventHandler("OnSurvivalNoRespawnsWarning", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
| `userid` |   `int`   |
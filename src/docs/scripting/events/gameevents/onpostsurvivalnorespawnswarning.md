---
title: OnPostSurvivalNoRespawnsWarning
index: true
order: 2
category:
  - Guide
---

# OnPostSurvivalNoRespawnsWarning
This event is triggered after survival_no_respawns_warning is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number EventResult
AddEventHandler("OnPostSurvivalNoRespawnsWarning", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
| `userid` |   `int`   |
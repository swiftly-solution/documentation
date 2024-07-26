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
@event returns void
AddEventHandler("OnPostSurvivalNoRespawnsWarning", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
| `userid` |   `int`   |
---
title: OnSurvivalNoRespawnsWarning
index: true
order: 2
category:
  - Guide
---

# OnSurvivalNoRespawnsWarning
This event is triggered when survival_no_respawns_warning is triggered
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnSurvivalNoRespawnsWarning", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
| `userid` |   `int`   |
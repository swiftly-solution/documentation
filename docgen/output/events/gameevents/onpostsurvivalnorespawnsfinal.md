---
title: OnPostSurvivalNoRespawnsFinal
index: true
order: 2
category:
  - Guide
---

# OnPostSurvivalNoRespawnsFinal
This event is triggered after survival_no_respawns_final is triggered.
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnPostSurvivalNoRespawnsFinal", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
| `userid` |   `int`   |
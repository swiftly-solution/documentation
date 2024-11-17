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
--- @param event Event
--- @return number|nil EventResult
AddEventHandler("OnPostSurvivalNoRespawnsFinal", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
| `userid` |   `int`   |
---
title: OnSurvivalNoRespawnsFinal
index: true
order: 2
category:
  - Guide
---

# OnSurvivalNoRespawnsFinal
This event is triggered when survival_no_respawns_final is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number|nil EventResult
AddEventHandler("OnSurvivalNoRespawnsFinal", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
| `userid` |   `int`   |
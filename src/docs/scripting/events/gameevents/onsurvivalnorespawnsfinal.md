---
title: OnSurvivalNoRespawnsFinal
index: true
order: 2
category:
  - Guide
---

# OnSurvivalNoRespawnsFinal
This event is triggered when survival_no_respawns_final is triggered
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnSurvivalNoRespawnsFinal", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
| `userid` |   `int`   |
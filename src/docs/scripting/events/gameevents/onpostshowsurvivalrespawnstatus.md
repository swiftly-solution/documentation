---
title: OnPostShowSurvivalRespawnStatus
index: true
order: 2
category:
  - Guide
---

# OnPostShowSurvivalRespawnStatus
This event is triggered after show_survival_respawn_status is triggered.
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnPostShowSurvivalRespawnStatus", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|     Key     | Data Type |
| :---------: | :-------: |
| `loc_token` |  `string` |
|  `duration` |   `int`   |
|   `userid`  |   `int`   |
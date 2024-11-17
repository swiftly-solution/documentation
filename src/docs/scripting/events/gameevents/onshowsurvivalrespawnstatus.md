---
title: OnShowSurvivalRespawnStatus
index: true
order: 2
category:
  - Guide
---

# OnShowSurvivalRespawnStatus
This event is triggered when show_survival_respawn_status is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number|nil EventResult
AddEventHandler("OnShowSurvivalRespawnStatus", function(event)
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
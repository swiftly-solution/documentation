---
title: OnPostSurvivalTeammateRespawn
index: true
order: 2
category:
  - Guide
---

# OnPostSurvivalTeammateRespawn
This event is triggered after survival_teammate_respawn is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number|nil EventResult
AddEventHandler("OnPostSurvivalTeammateRespawn", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
| `userid` |   `int`   |
---
title: OnSurvivalTeammateRespawn
index: true
order: 2
category:
  - Guide
---

# OnSurvivalTeammateRespawn
This event is triggered when survival_teammate_respawn is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number|nil EventResult
AddEventHandler("OnSurvivalTeammateRespawn", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
| `userid` |   `int`   |
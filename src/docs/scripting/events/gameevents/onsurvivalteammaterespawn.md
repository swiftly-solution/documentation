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
@event returns void
AddEventHandler("OnSurvivalTeammateRespawn", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
| `userid` |   `int`   |
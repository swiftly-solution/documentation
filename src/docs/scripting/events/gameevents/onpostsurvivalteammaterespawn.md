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
@event returns void
AddEventHandler("OnPostSurvivalTeammateRespawn", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
| `userid` |   `int`   |
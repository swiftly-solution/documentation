---
title: OnPostSurvivalParadropSpawn
index: true
order: 2
category:
  - Guide
---

# OnPostSurvivalParadropSpawn
This event is triggered after survival_paradrop_spawn is triggered.
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnPostSurvivalParadropSpawn", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|     Key    | Data Type |
| :--------: | :-------: |
| `entityid` |   `int`   |
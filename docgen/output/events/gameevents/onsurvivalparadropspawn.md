---
title: OnSurvivalParadropSpawn
index: true
order: 2
category:
  - Guide
---

# OnSurvivalParadropSpawn
This event is triggered when survival_paradrop_spawn is triggered.
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnSurvivalParadropSpawn", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|     Key    | Data Type |
| :--------: | :-------: |
| `entityid` |   `int`   |
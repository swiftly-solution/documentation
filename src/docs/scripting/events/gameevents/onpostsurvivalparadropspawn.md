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
--- @param event Event
--- @return number|nil EventResult
AddEventHandler("OnPostSurvivalParadropSpawn", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|     Key    | Data Type |
| :--------: | :-------: |
| `entityid` |   `int`   |
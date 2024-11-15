---
title: OnSurvivalParadropBreak
index: true
order: 2
category:
  - Guide
---

# OnSurvivalParadropBreak
This event is triggered when survival_paradrop_break is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number EventResult
AddEventHandler("OnSurvivalParadropBreak", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|     Key    | Data Type |
| :--------: | :-------: |
| `entityid` |   `int`   |
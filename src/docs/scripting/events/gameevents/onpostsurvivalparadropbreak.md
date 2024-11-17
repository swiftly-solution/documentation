---
title: OnPostSurvivalParadropBreak
index: true
order: 2
category:
  - Guide
---

# OnPostSurvivalParadropBreak
This event is triggered after survival_paradrop_break is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number|nil EventResult
AddEventHandler("OnPostSurvivalParadropBreak", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|     Key    | Data Type |
| :--------: | :-------: |
| `entityid` |   `int`   |
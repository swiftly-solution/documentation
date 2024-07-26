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
@event returns void
AddEventHandler("OnSurvivalParadropBreak", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|     Key    | Data Type |
| :--------: | :-------: |
| `entityid` |   `int`   |
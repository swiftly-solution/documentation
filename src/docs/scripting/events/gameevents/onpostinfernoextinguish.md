---
title: OnPostInfernoExtinguish
index: true
order: 2
category:
  - Guide
---

# OnPostInfernoExtinguish
This event is triggered after inferno_extinguish is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number|nil EventResult
AddEventHandler("OnPostInfernoExtinguish", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|     Key    | Data Type |
| :--------: | :-------: |
| `entityid` |   `int`   |
|     `x`    |  `float`  |
|     `y`    |  `float`  |
|     `z`    |  `float`  |
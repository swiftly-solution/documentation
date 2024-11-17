---
title: OnInfernoExtinguish
index: true
order: 2
category:
  - Guide
---

# OnInfernoExtinguish
This event is triggered when inferno_extinguish is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number|nil EventResult
AddEventHandler("OnInfernoExtinguish", function(event)
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
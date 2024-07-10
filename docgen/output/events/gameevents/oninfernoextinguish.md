---
title: OnInfernoExtinguish
index: true
order: 2
category:
  - Guide
---

# OnInfernoExtinguish
This event is triggered when inferno_extinguish is triggered
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnInfernoExtinguish", function(event --[[ Event ]])
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
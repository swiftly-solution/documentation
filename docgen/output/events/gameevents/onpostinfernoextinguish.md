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
@event returns void
AddEventHandler("OnPostInfernoExtinguish", function(event --[[ Event ]])
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
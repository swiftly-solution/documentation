---
title: OnInfernoExpire
index: true
order: 2
category:
  - Guide
---

# OnInfernoExpire
This event is triggered when inferno_expire is triggered
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnInfernoExpire", function(event --[[ Event ]])
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
---
title: OnInfernoStartburn
index: true
order: 2
category:
  - Guide
---

# OnInfernoStartburn
This event is triggered when inferno_startburn is triggered.
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnInfernoStartburn", function(event --[[ Event ]])
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
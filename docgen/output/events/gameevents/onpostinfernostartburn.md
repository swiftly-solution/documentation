---
title: OnPostInfernoStartburn
index: true
order: 2
category:
  - Guide
---

# OnPostInfernoStartburn
This event is triggered after inferno_startburn is triggered.
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnPostInfernoStartburn", function(event --[[ Event ]])
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
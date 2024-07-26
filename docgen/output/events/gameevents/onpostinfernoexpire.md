---
title: OnPostInfernoExpire
index: true
order: 2
category:
  - Guide
---

# OnPostInfernoExpire
This event is triggered after inferno_expire is triggered.
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnPostInfernoExpire", function(event --[[ Event ]])
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
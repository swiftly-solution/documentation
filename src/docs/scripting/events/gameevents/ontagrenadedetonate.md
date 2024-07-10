---
title: OnTagrenadeDetonate
index: true
order: 2
category:
  - Guide
---

# OnTagrenadeDetonate
This event is triggered when tagrenade_detonate is triggered
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnTagrenadeDetonate", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|     Key    | Data Type |
| :--------: | :-------: |
|  `userid`  |   `int`   |
| `entityid` |   `int`   |
|     `x`    |  `float`  |
|     `y`    |  `float`  |
|     `z`    |  `float`  |
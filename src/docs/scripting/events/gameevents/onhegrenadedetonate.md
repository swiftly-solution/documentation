---
title: OnHegrenadeDetonate
index: true
order: 2
category:
  - Guide
---

# OnHegrenadeDetonate
This event is triggered when hegrenade_detonate is triggered
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnHegrenadeDetonate", function(event --[[ Event ]])
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
---
title: OnBulletImpact
index: true
order: 2
category:
  - Guide
---

# OnBulletImpact
This event is triggered when bullet_impact is triggered
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnBulletImpact", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
| `userid` |   `int`   |
|    `x`   |  `float`  |
|    `y`   |  `float`  |
|    `z`   |  `float`  |
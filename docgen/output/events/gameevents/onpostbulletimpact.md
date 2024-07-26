---
title: OnPostBulletImpact
index: true
order: 2
category:
  - Guide
---

# OnPostBulletImpact
This event is triggered after bullet_impact is triggered.
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnPostBulletImpact", function(event --[[ Event ]])
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
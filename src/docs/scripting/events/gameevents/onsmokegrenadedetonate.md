---
title: OnSmokegrenadeDetonate
index: true
order: 2
category:
  - Guide
---

# OnSmokegrenadeDetonate
This event is triggered when smokegrenade_detonate is triggered.
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnSmokegrenadeDetonate", function(event --[[ Event ]])
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
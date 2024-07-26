---
title: OnPostSmokegrenadeDetonate
index: true
order: 2
category:
  - Guide
---

# OnPostSmokegrenadeDetonate
This event is triggered after smokegrenade_detonate is triggered.
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnPostSmokegrenadeDetonate", function(event --[[ Event ]])
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
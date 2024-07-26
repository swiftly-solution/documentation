---
title: OnPostHegrenadeDetonate
index: true
order: 2
category:
  - Guide
---

# OnPostHegrenadeDetonate
This event is triggered after hegrenade_detonate is triggered.
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnPostHegrenadeDetonate", function(event --[[ Event ]])
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
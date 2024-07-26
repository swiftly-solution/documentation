---
title: OnDecoyDetonate
index: true
order: 2
category:
  - Guide
---

# OnDecoyDetonate
This event is triggered when decoy_detonate is triggered.
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnDecoyDetonate", function(event --[[ Event ]])
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
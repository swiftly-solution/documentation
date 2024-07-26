---
title: OnDecoyFiring
index: true
order: 2
category:
  - Guide
---

# OnDecoyFiring
This event is triggered when decoy_firing is triggered.
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnDecoyFiring", function(event --[[ Event ]])
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
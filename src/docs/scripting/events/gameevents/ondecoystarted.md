---
title: OnDecoyStarted
index: true
order: 2
category:
  - Guide
---

# OnDecoyStarted
This event is triggered when decoy_started is triggered.
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnDecoyStarted", function(event --[[ Event ]])
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
---
title: OnPostDecoyDetonate
index: true
order: 2
category:
  - Guide
---

# OnPostDecoyDetonate
This event is triggered after decoy_detonate is triggered.
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnPostDecoyDetonate", function(event --[[ Event ]])
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
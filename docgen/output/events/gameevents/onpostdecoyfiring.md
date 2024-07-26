---
title: OnPostDecoyFiring
index: true
order: 2
category:
  - Guide
---

# OnPostDecoyFiring
This event is triggered after decoy_firing is triggered.
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnPostDecoyFiring", function(event --[[ Event ]])
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
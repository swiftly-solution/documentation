---
title: OnPostDecoyStarted
index: true
order: 2
category:
  - Guide
---

# OnPostDecoyStarted
This event is triggered after decoy_started is triggered.
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnPostDecoyStarted", function(event --[[ Event ]])
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
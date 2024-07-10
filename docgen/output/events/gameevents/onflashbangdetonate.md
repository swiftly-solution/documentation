---
title: OnFlashbangDetonate
index: true
order: 2
category:
  - Guide
---

# OnFlashbangDetonate
This event is triggered when flashbang_detonate is triggered
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnFlashbangDetonate", function(event --[[ Event ]])
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
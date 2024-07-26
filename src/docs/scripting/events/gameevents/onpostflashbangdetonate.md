---
title: OnPostFlashbangDetonate
index: true
order: 2
category:
  - Guide
---

# OnPostFlashbangDetonate
This event is triggered after flashbang_detonate is triggered.
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnPostFlashbangDetonate", function(event --[[ Event ]])
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
---
title: OnPostMolotovDetonate
index: true
order: 2
category:
  - Guide
---

# OnPostMolotovDetonate
This event is triggered after molotov_detonate is triggered.
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnPostMolotovDetonate", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
| `userid` |   `int`   |
|    `x`   |  `float`  |
|    `y`   |  `float`  |
|    `z`   |  `float`  |
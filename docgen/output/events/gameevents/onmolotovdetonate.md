---
title: OnMolotovDetonate
index: true
order: 2
category:
  - Guide
---

# OnMolotovDetonate
This event is triggered when molotov_detonate is triggered
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnMolotovDetonate", function(event --[[ Event ]])
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
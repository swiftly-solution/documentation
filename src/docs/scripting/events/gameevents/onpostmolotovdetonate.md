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
--- @param event Event
--- @return number EventResult
AddEventHandler("OnPostMolotovDetonate", function(event)
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
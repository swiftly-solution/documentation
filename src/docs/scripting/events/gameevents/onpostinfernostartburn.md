---
title: OnPostInfernoStartburn
index: true
order: 2
category:
  - Guide
---

# OnPostInfernoStartburn
This event is triggered after inferno_startburn is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number EventResult
AddEventHandler("OnPostInfernoStartburn", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|     Key    | Data Type |
| :--------: | :-------: |
| `entityid` |   `int`   |
|     `x`    |  `float`  |
|     `y`    |  `float`  |
|     `z`    |  `float`  |
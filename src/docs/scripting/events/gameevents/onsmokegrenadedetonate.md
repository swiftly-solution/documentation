---
title: OnSmokegrenadeDetonate
index: true
order: 2
category:
  - Guide
---

# OnSmokegrenadeDetonate
This event is triggered when smokegrenade_detonate is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number|nil EventResult
AddEventHandler("OnSmokegrenadeDetonate", function(event)
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
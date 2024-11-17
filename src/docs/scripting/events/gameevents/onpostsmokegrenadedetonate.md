---
title: OnPostSmokegrenadeDetonate
index: true
order: 2
category:
  - Guide
---

# OnPostSmokegrenadeDetonate
This event is triggered after smokegrenade_detonate is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number|nil EventResult
AddEventHandler("OnPostSmokegrenadeDetonate", function(event)
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
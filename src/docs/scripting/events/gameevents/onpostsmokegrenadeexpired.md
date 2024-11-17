---
title: OnPostSmokegrenadeExpired
index: true
order: 2
category:
  - Guide
---

# OnPostSmokegrenadeExpired
This event is triggered after smokegrenade_expired is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number|nil EventResult
AddEventHandler("OnPostSmokegrenadeExpired", function(event)
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
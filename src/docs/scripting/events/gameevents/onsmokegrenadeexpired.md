---
title: OnSmokegrenadeExpired
index: true
order: 2
category:
  - Guide
---

# OnSmokegrenadeExpired
This event is triggered when smokegrenade_expired is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number EventResult
AddEventHandler("OnSmokegrenadeExpired", function(event)
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
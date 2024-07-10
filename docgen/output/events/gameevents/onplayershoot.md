---
title: OnPlayerShoot
index: true
order: 2
category:
  - Guide
---

# OnPlayerShoot
This event is triggered when player shoot his weapon
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnPlayerShoot", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
| `userid` |   `int`   |
| `weapon` |   `int`   |
|  `mode`  |   `int`   |
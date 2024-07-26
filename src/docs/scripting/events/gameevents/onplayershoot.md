---
title: OnPlayerShoot
index: true
order: 2
category:
  - Guide
---

# OnPlayerShoot
This event is triggered when player_shoot is triggered.
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
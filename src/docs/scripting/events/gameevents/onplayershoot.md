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
--- @param event Event
--- @return number|nil EventResult
AddEventHandler("OnPlayerShoot", function(event)
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
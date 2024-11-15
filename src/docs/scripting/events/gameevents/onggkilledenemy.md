---
title: OnGgKilledEnemy
index: true
order: 2
category:
  - Guide
---

# OnGgKilledEnemy
This event is triggered when gg_killed_enemy is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number EventResult
AddEventHandler("OnGgKilledEnemy", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|      Key     | Data Type |
| :----------: | :-------: |
|  `victimid`  |   `int`   |
| `attackerid` |   `int`   |
|  `dominated` |   `int`   |
|   `revenge`  |   `int`   |
|    `bonus`   | `boolean` |
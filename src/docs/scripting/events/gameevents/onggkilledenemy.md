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
@event returns void
AddEventHandler("OnGgKilledEnemy", function(event --[[ Event ]])
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
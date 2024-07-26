---
title: OnPostGgKilledEnemy
index: true
order: 2
category:
  - Guide
---

# OnPostGgKilledEnemy
This event is triggered after gg_killed_enemy is triggered.
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnPostGgKilledEnemy", function(event --[[ Event ]])
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
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
--- @param event Event
--- @return number|nil EventResult
AddEventHandler("OnPostGgKilledEnemy", function(event)
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
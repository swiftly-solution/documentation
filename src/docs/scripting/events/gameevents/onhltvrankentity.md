---
title: OnHltvRankEntity
index: true
order: 2
category:
  - Guide
---

# OnHltvRankEntity
This event is triggered when hltv_rank_entity is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number|nil EventResult
AddEventHandler("OnHltvRankEntity", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
| `userid` |   `int`   |
|  `rank`  |  `float`  |
| `target` |   `int`   |
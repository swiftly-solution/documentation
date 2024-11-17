---
title: OnPostHltvRankEntity
index: true
order: 2
category:
  - Guide
---

# OnPostHltvRankEntity
This event is triggered after hltv_rank_entity is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number|nil EventResult
AddEventHandler("OnPostHltvRankEntity", function(event)
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
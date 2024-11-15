---
title: OnHltvRankCamera
index: true
order: 2
category:
  - Guide
---

# OnHltvRankCamera
This event is triggered when hltv_rank_camera is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number EventResult
AddEventHandler("OnHltvRankCamera", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
|  `index` |   `int`   |
|  `rank`  |  `float`  |
| `target` |   `int`   |
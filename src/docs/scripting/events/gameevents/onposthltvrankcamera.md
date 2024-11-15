---
title: OnPostHltvRankCamera
index: true
order: 2
category:
  - Guide
---

# OnPostHltvRankCamera
This event is triggered after hltv_rank_camera is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number EventResult
AddEventHandler("OnPostHltvRankCamera", function(event)
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
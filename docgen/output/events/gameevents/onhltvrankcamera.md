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
@event returns void
AddEventHandler("OnHltvRankCamera", function(event --[[ Event ]])
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
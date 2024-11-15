---
title: OnAddBulletHitMarker
index: true
order: 2
category:
  - Guide
---

# OnAddBulletHitMarker
This event is triggered when add_bullet_hit_marker is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number EventResult
AddEventHandler("OnAddBulletHitMarker", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key    | Data Type |
| :-------: | :-------: |
|  `userid` |   `int`   |
|   `bone`  |   `int`   |
|  `pos_x`  |   `int`   |
|  `pos_y`  |   `int`   |
|  `pos_z`  |   `int`   |
|  `ang_x`  |   `int`   |
|  `ang_y`  |   `int`   |
|  `ang_z`  |   `int`   |
| `start_x` |   `int`   |
| `start_y` |   `int`   |
| `start_z` |   `int`   |
|   `hit`   | `boolean` |
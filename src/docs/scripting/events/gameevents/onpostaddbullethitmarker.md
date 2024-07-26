---
title: OnPostAddBulletHitMarker
index: true
order: 2
category:
  - Guide
---

# OnPostAddBulletHitMarker
This event is triggered after add_bullet_hit_marker is triggered.
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnPostAddBulletHitMarker", function(event --[[ Event ]])
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
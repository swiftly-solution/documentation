---
title: OnBulletFlightResolution
index: true
order: 2
category:
  - Guide
---

# OnBulletFlightResolution
This event is triggered when bullet_flight_resolution is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number EventResult
AddEventHandler("OnBulletFlightResolution", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key    | Data Type |
| :-------: | :-------: |
|  `userid` |   `int`   |
|  `pos_x`  |   `int`   |
|  `pos_y`  |   `int`   |
|  `pos_z`  |   `int`   |
|  `ang_x`  |   `int`   |
|  `ang_y`  |   `int`   |
|  `ang_z`  |   `int`   |
| `start_x` |   `int`   |
| `start_y` |   `int`   |
| `start_z` |   `int`   |
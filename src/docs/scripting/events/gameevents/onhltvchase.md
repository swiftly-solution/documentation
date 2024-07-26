---
title: OnHltvChase
index: true
order: 2
category:
  - Guide
---

# OnHltvChase
This event is triggered when hltv_chase is triggered.
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnHltvChase", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|     Key    | Data Type |
| :--------: | :-------: |
|  `target1` |   `int`   |
|  `target2` |   `int`   |
| `distance` |   `int`   |
|   `theta`  |   `int`   |
|    `phi`   |   `int`   |
|  `inertia` |   `int`   |
|   `ineye`  |   `int`   |
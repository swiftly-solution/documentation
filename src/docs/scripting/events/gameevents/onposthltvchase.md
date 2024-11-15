---
title: OnPostHltvChase
index: true
order: 2
category:
  - Guide
---

# OnPostHltvChase
This event is triggered after hltv_chase is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number EventResult
AddEventHandler("OnPostHltvChase", function(event)
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
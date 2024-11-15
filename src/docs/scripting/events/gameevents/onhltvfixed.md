---
title: OnHltvFixed
index: true
order: 2
category:
  - Guide
---

# OnHltvFixed
This event is triggered when hltv_fixed is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number EventResult
AddEventHandler("OnHltvFixed", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
|  `posx`  |   `int`   |
|  `posy`  |   `int`   |
|  `posz`  |   `int`   |
|  `theta` |   `int`   |
|   `phi`  |   `int`   |
| `offset` |   `int`   |
|   `fov`  |  `float`  |
| `target` |   `int`   |
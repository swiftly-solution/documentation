---
title: OnPostHltvFixed
index: true
order: 2
category:
  - Guide
---

# OnPostHltvFixed
This event is triggered after hltv_fixed is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number|nil EventResult
AddEventHandler("OnPostHltvFixed", function(event)
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
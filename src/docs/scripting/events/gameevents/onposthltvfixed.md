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
@event returns void
AddEventHandler("OnPostHltvFixed", function(event --[[ Event ]])
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
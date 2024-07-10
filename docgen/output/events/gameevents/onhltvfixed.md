---
title: OnHltvFixed
index: true
order: 2
category:
  - Guide
---

# OnHltvFixed
This event is triggered when show from fixed view
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnHltvFixed", function(event --[[ Event ]])
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
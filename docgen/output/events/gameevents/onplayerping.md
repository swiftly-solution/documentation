---
title: OnPlayerPing
index: true
order: 2
category:
  - Guide
---

# OnPlayerPing
This event is triggered when player_ping is triggered
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnPlayerPing", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|     Key    | Data Type |
| :--------: | :-------: |
|  `userid`  |   `int`   |
| `entityid` |   `int`   |
|     `x`    |  `float`  |
|     `y`    |  `float`  |
|     `z`    |  `float`  |
|  `urgent`  | `boolean` |
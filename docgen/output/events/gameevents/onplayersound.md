---
title: OnPlayerSound
index: true
order: 2
category:
  - Guide
---

# OnPlayerSound
This event is triggered when player_sound is triggered.
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnPlayerSound", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|     Key    | Data Type |
| :--------: | :-------: |
|  `userid`  |   `int`   |
|  `radius`  |   `int`   |
| `duration` |  `float`  |
|   `step`   | `boolean` |
---
title: OnPostPlayerSound
index: true
order: 2
category:
  - Guide
---

# OnPostPlayerSound
This event is triggered after player_sound is triggered.
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnPostPlayerSound", function(event --[[ Event ]])
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
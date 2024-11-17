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
--- @param event Event
--- @return number|nil EventResult
AddEventHandler("OnPostPlayerSound", function(event)
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
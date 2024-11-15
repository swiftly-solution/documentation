---
title: OnPostPlayerShoot
index: true
order: 2
category:
  - Guide
---

# OnPostPlayerShoot
This event is triggered after player_shoot is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number EventResult
AddEventHandler("OnPostPlayerShoot", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
| `userid` |   `int`   |
| `weapon` |   `int`   |
|  `mode`  |   `int`   |
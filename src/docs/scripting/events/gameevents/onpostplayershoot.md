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
@event returns void
AddEventHandler("OnPostPlayerShoot", function(event --[[ Event ]])
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
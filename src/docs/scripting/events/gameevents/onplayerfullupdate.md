---
title: OnPlayerFullUpdate
index: true
order: 2
category:
  - Guide
---

# OnPlayerFullUpdate
This event is triggered when player_full_update is triggered
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnPlayerFullUpdate", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
| `userid` |   `int`   |
|  `count` |   `int`   |
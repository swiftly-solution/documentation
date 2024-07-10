---
title: OnPlayerActivate
index: true
order: 2
category:
  - Guide
---

# OnPlayerActivate
This event is triggered when player_activate is triggered
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnPlayerActivate", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
| `userid` |   `int`   |
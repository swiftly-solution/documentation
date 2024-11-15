---
title: OnPlayerActivate
index: true
order: 2
category:
  - Guide
---

# OnPlayerActivate
This event is triggered when player_activate is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number EventResult
AddEventHandler("OnPlayerActivate", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
| `userid` |   `int`   |
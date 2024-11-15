---
title: OnPlayerSpawn
index: true
order: 2
category:
  - Guide
---

# OnPlayerSpawn
This event is triggered when player_spawn is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number EventResult
AddEventHandler("OnPlayerSpawn", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
| `userid` |   `int`   |
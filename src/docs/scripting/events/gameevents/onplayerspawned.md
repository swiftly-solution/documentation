---
title: OnPlayerSpawned
index: true
order: 2
category:
  - Guide
---

# OnPlayerSpawned
This event is triggered when player_spawned is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number|nil EventResult
AddEventHandler("OnPlayerSpawned", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|     Key     | Data Type |
| :---------: | :-------: |
|   `userid`  |   `int`   |
| `inrestart` | `boolean` |
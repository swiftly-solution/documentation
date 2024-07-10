---
title: OnPlayerSpawned
index: true
order: 2
category:
  - Guide
---

# OnPlayerSpawned
This event is triggered when player_spawned is triggered
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnPlayerSpawned", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|     Key     | Data Type |
| :---------: | :-------: |
|   `userid`  |   `int`   |
| `inrestart` | `boolean` |
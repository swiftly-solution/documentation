---
title: OnPostPlayerSpawned
index: true
order: 2
category:
  - Guide
---

# OnPostPlayerSpawned
This event is triggered after player_spawned is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number|nil EventResult
AddEventHandler("OnPostPlayerSpawned", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|     Key     | Data Type |
| :---------: | :-------: |
|   `userid`  |   `int`   |
| `inrestart` | `boolean` |
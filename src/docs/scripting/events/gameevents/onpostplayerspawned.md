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
@event returns void
AddEventHandler("OnPostPlayerSpawned", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|     Key     | Data Type |
| :---------: | :-------: |
|   `userid`  |   `int`   |
| `inrestart` | `boolean` |
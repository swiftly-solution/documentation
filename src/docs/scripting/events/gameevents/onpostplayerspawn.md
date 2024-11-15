---
title: OnPostPlayerSpawn
index: true
order: 2
category:
  - Guide
---

# OnPostPlayerSpawn
This event is triggered after player_spawn is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number EventResult
AddEventHandler("OnPostPlayerSpawn", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
| `userid` |   `int`   |
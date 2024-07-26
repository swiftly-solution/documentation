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
@event returns void
AddEventHandler("OnPostPlayerSpawn", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
| `userid` |   `int`   |
---
title: OnPlayerSpawn
index: true
order: 2
category:
  - Guide
---

# OnPlayerSpawn
This event is triggered when player spawned in game
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnPlayerSpawn", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
| `userid` |   `int`   |
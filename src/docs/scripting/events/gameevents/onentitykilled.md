---
title: OnEntityKilled
index: true
order: 2
category:
  - Guide
---

# OnEntityKilled
This event is triggered when entity_killed is triggered
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnEntityKilled", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|          Key         | Data Type |
| :------------------: | :-------: |
|   `entindex_killed`  |   `int`   |
|  `entindex_attacker` |   `int`   |
| `entindex_inflictor` |   `int`   |
|     `damagebits`     |   `int`   |
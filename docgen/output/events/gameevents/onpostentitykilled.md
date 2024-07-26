---
title: OnPostEntityKilled
index: true
order: 2
category:
  - Guide
---

# OnPostEntityKilled
This event is triggered after entity_killed is triggered.
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnPostEntityKilled", function(event --[[ Event ]])
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
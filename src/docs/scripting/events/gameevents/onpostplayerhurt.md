---
title: OnPostPlayerHurt
index: true
order: 2
category:
  - Guide
---

# OnPostPlayerHurt
This event is triggered after player_hurt is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number EventResult
AddEventHandler("OnPostPlayerHurt", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|      Key     | Data Type |
| :----------: | :-------: |
|   `userid`   |   `int`   |
|  `attacker`  |   `int`   |
|   `health`   |   `int`   |
|    `armor`   |   `int`   |
|   `weapon`   |  `string` |
| `dmg_health` |   `int`   |
|  `dmg_armor` |   `int`   |
|  `hitgroup`  |   `int`   |
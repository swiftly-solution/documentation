---
title: OnPlayerHurt
index: true
order: 2
category:
  - Guide
---

# OnPlayerHurt
This event is triggered when player_hurt is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number EventResult
AddEventHandler("OnPlayerHurt", function(event)
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
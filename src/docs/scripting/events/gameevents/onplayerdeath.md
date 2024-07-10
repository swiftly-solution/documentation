---
title: OnPlayerDeath
index: true
order: 2
category:
  - Guide
---

# OnPlayerDeath
This event is triggered when a game event, name may be 32 characters long
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnPlayerDeath", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|             Key             | Data Type |
| :-------------------------: | :-------: |
|           `userid`          |   `int`   |
|          `attacker`         |   `int`   |
|          `assister`         |   `int`   |
|       `assistedflash`       | `boolean` |
|           `weapon`          |  `string` |
|       `weapon_itemid`       |  `string` |
|     `weapon_fauxitemid`     |  `string` |
| `weapon_originalowner_xuid` |  `string` |
|          `headshot`         | `boolean` |
|         `dominated`         |   `int`   |
|          `revenge`          |   `int`   |
|            `wipe`           |   `int`   |
|         `penetrated`        |   `int`   |
|          `noreplay`         | `boolean` |
|          `noscope`          | `boolean` |
|         `thrusmoke`         | `boolean` |
|       `attackerblind`       | `boolean` |
|          `distance`         |  `float`  |
|         `dmg_health`        |   `int`   |
|         `dmg_armor`         |   `int`   |
|          `hitgroup`         |   `int`   |
|       `attackerinair`       | `boolean` |
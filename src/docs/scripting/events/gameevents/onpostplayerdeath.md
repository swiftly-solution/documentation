---
title: OnPostPlayerDeath
index: true
order: 2
category:
  - Guide
---

# OnPostPlayerDeath
This event is triggered after player_death is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number|nil EventResult
AddEventHandler("OnPostPlayerDeath", function(event)
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
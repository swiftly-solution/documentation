---
title: OnPostOtherDeath
index: true
order: 2
category:
  - Guide
---

# OnPostOtherDeath
This event is triggered after other_death is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number EventResult
AddEventHandler("OnPostOtherDeath", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|             Key             | Data Type |
| :-------------------------: | :-------: |
|          `otherid`          |   `int`   |
|         `othertype`         |  `string` |
|          `attacker`         |   `int`   |
|           `weapon`          |  `string` |
|       `weapon_itemid`       |  `string` |
|     `weapon_fauxitemid`     |  `string` |
| `weapon_originalowner_xuid` |  `string` |
|          `headshot`         | `boolean` |
|         `penetrated`        |   `int`   |
|          `noscope`          | `boolean` |
|         `thrusmoke`         | `boolean` |
|       `attackerblind`       | `boolean` |
---
title: OnDmBonusWeaponStart
index: true
order: 2
category:
  - Guide
---

# OnDmBonusWeaponStart
This event is triggered when dm_bonus_weapon_start is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number EventResult
AddEventHandler("OnDmBonusWeaponStart", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|   Key  | Data Type |
| :----: | :-------: |
| `time` |   `int`   |
|  `Pos` |   `int`   |
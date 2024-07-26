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
@event returns void
AddEventHandler("OnDmBonusWeaponStart", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|   Key  | Data Type |
| :----: | :-------: |
| `time` |   `int`   |
|  `Pos` |   `int`   |
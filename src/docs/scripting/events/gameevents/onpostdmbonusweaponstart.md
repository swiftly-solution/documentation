---
title: OnPostDmBonusWeaponStart
index: true
order: 2
category:
  - Guide
---

# OnPostDmBonusWeaponStart
This event is triggered after dm_bonus_weapon_start is triggered.
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnPostDmBonusWeaponStart", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|   Key  | Data Type |
| :----: | :-------: |
| `time` |   `int`   |
|  `Pos` |   `int`   |
---
title: OnPostWeaponFire
index: true
order: 2
category:
  - Guide
---

# OnPostWeaponFire
This event is triggered after weapon_fire is triggered.
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnPostWeaponFire", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|     Key    | Data Type |
| :--------: | :-------: |
|  `userid`  |   `int`   |
|  `weapon`  |  `string` |
| `silenced` | `boolean` |
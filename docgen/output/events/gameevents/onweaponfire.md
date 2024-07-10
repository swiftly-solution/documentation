---
title: OnWeaponFire
index: true
order: 2
category:
  - Guide
---

# OnWeaponFire
This event is triggered when weapon_fire is triggered
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnWeaponFire", function(event --[[ Event ]])
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
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
--- @param event Event
--- @return number|nil EventResult
AddEventHandler("OnPostWeaponFire", function(event)
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
---
title: OnWeaponFire
index: true
order: 2
category:
  - Guide
---

# OnWeaponFire
This event is triggered when weapon_fire is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number|nil EventResult
AddEventHandler("OnWeaponFire", function(event)
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
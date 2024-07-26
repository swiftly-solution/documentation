---
title: OnPostWeaponFireOnEmpty
index: true
order: 2
category:
  - Guide
---

# OnPostWeaponFireOnEmpty
This event is triggered after weapon_fire_on_empty is triggered.
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnPostWeaponFireOnEmpty", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
| `userid` |   `int`   |
| `weapon` |  `string` |
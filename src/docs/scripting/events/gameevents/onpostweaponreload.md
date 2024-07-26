---
title: OnPostWeaponReload
index: true
order: 2
category:
  - Guide
---

# OnPostWeaponReload
This event is triggered after weapon_reload is triggered.
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnPostWeaponReload", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
| `userid` |   `int`   |
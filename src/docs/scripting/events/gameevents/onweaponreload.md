---
title: OnWeaponReload
index: true
order: 2
category:
  - Guide
---

# OnWeaponReload
This event is triggered when weapon_reload is triggered
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnWeaponReload", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
| `userid` |   `int`   |
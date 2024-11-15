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
--- @param event Event
--- @return number EventResult
AddEventHandler("OnPostWeaponReload", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
| `userid` |   `int`   |
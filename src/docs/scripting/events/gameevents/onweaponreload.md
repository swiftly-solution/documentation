---
title: OnWeaponReload
index: true
order: 2
category:
  - Guide
---

# OnWeaponReload
This event is triggered when weapon_reload is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number EventResult
AddEventHandler("OnWeaponReload", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
| `userid` |   `int`   |
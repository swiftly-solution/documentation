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
--- @param event Event
--- @return number EventResult
AddEventHandler("OnPostWeaponFireOnEmpty", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
| `userid` |   `int`   |
| `weapon` |  `string` |
---
title: OnWeaponFireOnEmpty
index: true
order: 2
category:
  - Guide
---

# OnWeaponFireOnEmpty
This event is triggered when weapon_fire_on_empty is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number EventResult
AddEventHandler("OnWeaponFireOnEmpty", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
| `userid` |   `int`   |
| `weapon` |  `string` |
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
@event returns void
AddEventHandler("OnWeaponFireOnEmpty", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
| `userid` |   `int`   |
| `weapon` |  `string` |
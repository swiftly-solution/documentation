---
title: OnWeaponOutofammo
index: true
order: 2
category:
  - Guide
---

# OnWeaponOutofammo
This event is triggered when weapon_outofammo is triggered
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnWeaponOutofammo", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
| `userid` |   `int`   |
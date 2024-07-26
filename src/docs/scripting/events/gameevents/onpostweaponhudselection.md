---
title: OnPostWeaponhudSelection
index: true
order: 2
category:
  - Guide
---

# OnPostWeaponhudSelection
This event is triggered after weaponhud_selection is triggered.
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnPostWeaponhudSelection", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|     Key    | Data Type |
| :--------: | :-------: |
|  `userid`  |   `int`   |
|   `mode`   |   `int`   |
| `entindex` |   `int`   |
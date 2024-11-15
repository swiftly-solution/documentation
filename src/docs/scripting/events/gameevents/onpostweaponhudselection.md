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
--- @param event Event
--- @return number EventResult
AddEventHandler("OnPostWeaponhudSelection", function(event)
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
---
title: OnWeaponhudSelection
index: true
order: 2
category:
  - Guide
---

# OnWeaponhudSelection
This event is triggered when weaponhud_selection is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number|nil EventResult
AddEventHandler("OnWeaponhudSelection", function(event)
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
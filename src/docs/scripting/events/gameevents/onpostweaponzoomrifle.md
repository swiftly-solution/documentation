---
title: OnPostWeaponZoomRifle
index: true
order: 2
category:
  - Guide
---

# OnPostWeaponZoomRifle
This event is triggered after weapon_zoom_rifle is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number EventResult
AddEventHandler("OnPostWeaponZoomRifle", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
| `userid` |   `int`   |
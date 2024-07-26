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
@event returns void
AddEventHandler("OnPostWeaponZoomRifle", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
| `userid` |   `int`   |
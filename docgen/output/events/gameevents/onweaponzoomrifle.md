---
title: OnWeaponZoomRifle
index: true
order: 2
category:
  - Guide
---

# OnWeaponZoomRifle
This event is triggered when weapon_zoom_rifle is triggered.
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnWeaponZoomRifle", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
| `userid` |   `int`   |
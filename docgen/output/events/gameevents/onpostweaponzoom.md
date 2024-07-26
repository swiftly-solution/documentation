---
title: OnPostWeaponZoom
index: true
order: 2
category:
  - Guide
---

# OnPostWeaponZoom
This event is triggered after weapon_zoom is triggered.
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnPostWeaponZoom", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
| `userid` |   `int`   |
---
title: OnWeaponZoom
index: true
order: 2
category:
  - Guide
---

# OnWeaponZoom
This event is triggered when weapon_zoom is triggered.
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnWeaponZoom", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
| `userid` |   `int`   |
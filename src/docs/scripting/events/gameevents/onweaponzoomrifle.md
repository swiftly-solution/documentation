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
--- @param event Event
--- @return number EventResult
AddEventHandler("OnWeaponZoomRifle", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
| `userid` |   `int`   |
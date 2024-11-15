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
--- @param event Event
--- @return number EventResult
AddEventHandler("OnPostWeaponZoom", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
| `userid` |   `int`   |
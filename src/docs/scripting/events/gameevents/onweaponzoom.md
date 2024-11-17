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
--- @param event Event
--- @return number|nil EventResult
AddEventHandler("OnWeaponZoom", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
| `userid` |   `int`   |
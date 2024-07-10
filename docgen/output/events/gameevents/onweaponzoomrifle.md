---
title: OnWeaponZoomRifle
index: true
order: 2
category:
  - Guide
---

# OnWeaponZoomRifle
This event is triggered when exists for the game instructor to let it know when the player zoomed in with a regular rifle. Different from the above weapon_zoom because we don't use this event to notify bots
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
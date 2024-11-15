---
title: OnAmmoPickup
index: true
order: 2
category:
  - Guide
---

# OnAmmoPickup
This event is triggered when ammo_pickup is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number EventResult
AddEventHandler("OnAmmoPickup", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
| `userid` |   `int`   |
|  `item`  |  `string` |
|  `index` |   `int`   |
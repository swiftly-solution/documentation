---
title: OnPostAmmoPickup
index: true
order: 2
category:
  - Guide
---

# OnPostAmmoPickup
This event is triggered after ammo_pickup is triggered.
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnPostAmmoPickup", function(event --[[ Event ]])
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
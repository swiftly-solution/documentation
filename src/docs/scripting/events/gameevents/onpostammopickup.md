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
--- @param event Event
--- @return number|nil EventResult
AddEventHandler("OnPostAmmoPickup", function(event)
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
---
title: OnPostAmmoRefill
index: true
order: 2
category:
  - Guide
---

# OnPostAmmoRefill
This event is triggered after ammo_refill is triggered.
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnPostAmmoRefill", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key    | Data Type |
| :-------: | :-------: |
|  `userid` |   `int`   |
| `success` | `boolean` |
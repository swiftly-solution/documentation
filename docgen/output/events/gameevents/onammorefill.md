---
title: OnAmmoRefill
index: true
order: 2
category:
  - Guide
---

# OnAmmoRefill
This event is triggered when ammo_refill is triggered.
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnAmmoRefill", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key    | Data Type |
| :-------: | :-------: |
|  `userid` |   `int`   |
| `success` | `boolean` |
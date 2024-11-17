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
--- @param event Event
--- @return number|nil EventResult
AddEventHandler("OnAmmoRefill", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key    | Data Type |
| :-------: | :-------: |
|  `userid` |   `int`   |
| `success` | `boolean` |
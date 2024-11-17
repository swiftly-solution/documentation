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
--- @param event Event
--- @return number|nil EventResult
AddEventHandler("OnPostAmmoRefill", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key    | Data Type |
| :-------: | :-------: |
|  `userid` |   `int`   |
| `success` | `boolean` |
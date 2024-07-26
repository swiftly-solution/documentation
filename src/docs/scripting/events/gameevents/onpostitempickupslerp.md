---
title: OnPostItemPickupSlerp
index: true
order: 2
category:
  - Guide
---

# OnPostItemPickupSlerp
This event is triggered after item_pickup_slerp is triggered.
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnPostItemPickupSlerp", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|     Key    | Data Type |
| :--------: | :-------: |
|  `userid`  |   `int`   |
|   `index`  |   `int`   |
| `behavior` |   `int`   |
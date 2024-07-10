---
title: OnItemPickupSlerp
index: true
order: 2
category:
  - Guide
---

# OnItemPickupSlerp
This event is triggered when item_pickup_slerp is triggered
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnItemPickupSlerp", function(event --[[ Event ]])
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
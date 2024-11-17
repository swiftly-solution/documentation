---
title: OnItemPickupSlerp
index: true
order: 2
category:
  - Guide
---

# OnItemPickupSlerp
This event is triggered when item_pickup_slerp is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number|nil EventResult
AddEventHandler("OnItemPickupSlerp", function(event)
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
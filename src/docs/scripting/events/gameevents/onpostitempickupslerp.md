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
--- @param event Event
--- @return number EventResult
AddEventHandler("OnPostItemPickupSlerp", function(event)
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
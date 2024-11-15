---
title: OnPostItemPickupFailed
index: true
order: 2
category:
  - Guide
---

# OnPostItemPickupFailed
This event is triggered after item_pickup_failed is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number EventResult
AddEventHandler("OnPostItemPickupFailed", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
| `userid` |   `int`   |
|  `item`  |  `string` |
| `reason` |   `int`   |
|  `limit` |   `int`   |
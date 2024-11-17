---
title: OnItemPickupFailed
index: true
order: 2
category:
  - Guide
---

# OnItemPickupFailed
This event is triggered when item_pickup_failed is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number|nil EventResult
AddEventHandler("OnItemPickupFailed", function(event)
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
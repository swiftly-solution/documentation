---
title: OnInventoryUpdated
index: true
order: 2
category:
  - Guide
---

# OnInventoryUpdated
This event is triggered when inventory_updated is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number EventResult
AddEventHandler("OnInventoryUpdated", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key    | Data Type |
| :-------: | :-------: |
| `itemdef` |   `int`   |
|  `itemid` |   `int`   |
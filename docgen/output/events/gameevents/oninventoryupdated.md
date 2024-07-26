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
@event returns void
AddEventHandler("OnInventoryUpdated", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key    | Data Type |
| :-------: | :-------: |
| `itemdef` |   `int`   |
|  `itemid` |   `int`   |
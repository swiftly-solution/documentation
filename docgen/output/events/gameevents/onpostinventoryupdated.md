---
title: OnPostInventoryUpdated
index: true
order: 2
category:
  - Guide
---

# OnPostInventoryUpdated
This event is triggered after inventory_updated is triggered.
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnPostInventoryUpdated", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key    | Data Type |
| :-------: | :-------: |
| `itemdef` |   `int`   |
|  `itemid` |   `int`   |
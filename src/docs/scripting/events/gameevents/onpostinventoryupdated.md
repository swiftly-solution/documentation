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
--- @param event Event
--- @return number|nil EventResult
AddEventHandler("OnPostInventoryUpdated", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key    | Data Type |
| :-------: | :-------: |
| `itemdef` |   `int`   |
|  `itemid` |   `int`   |
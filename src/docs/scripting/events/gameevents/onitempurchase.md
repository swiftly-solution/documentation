---
title: OnItemPurchase
index: true
order: 2
category:
  - Guide
---

# OnItemPurchase
This event is triggered when item_purchase is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number|nil EventResult
AddEventHandler("OnItemPurchase", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key    | Data Type |
| :-------: | :-------: |
|  `userid` |   `int`   |
|   `team`  |   `int`   |
| `loadout` |   `int`   |
|  `weapon` |  `string` |
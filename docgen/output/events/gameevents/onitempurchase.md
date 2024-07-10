---
title: OnItemPurchase
index: true
order: 2
category:
  - Guide
---

# OnItemPurchase
This event is triggered when item_purchase is triggered
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnItemPurchase", function(event --[[ Event ]])
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
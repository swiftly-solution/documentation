---
title: OnPostItemPurchase
index: true
order: 2
category:
  - Guide
---

# OnPostItemPurchase
This event is triggered after item_purchase is triggered.
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnPostItemPurchase", function(event --[[ Event ]])
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
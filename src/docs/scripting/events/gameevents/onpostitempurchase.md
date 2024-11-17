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
--- @param event Event
--- @return number|nil EventResult
AddEventHandler("OnPostItemPurchase", function(event)
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
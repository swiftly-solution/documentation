---
title: OnPostItemPickup
index: true
order: 2
category:
  - Guide
---

# OnPostItemPickup
This event is triggered after item_pickup is triggered.
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnPostItemPickup", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|     Key    | Data Type |
| :--------: | :-------: |
|  `userid`  |   `int`   |
|   `item`   |  `string` |
|  `silent`  | `boolean` |
| `defindex` |   `int`   |
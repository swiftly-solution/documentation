---
title: OnItemPickup
index: true
order: 2
category:
  - Guide
---

# OnItemPickup
This event is triggered when item_pickup is triggered
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnItemPickup", function(event --[[ Event ]])
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
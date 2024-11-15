---
title: OnItemPickup
index: true
order: 2
category:
  - Guide
---

# OnItemPickup
This event is triggered when item_pickup is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number EventResult
AddEventHandler("OnItemPickup", function(event)
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
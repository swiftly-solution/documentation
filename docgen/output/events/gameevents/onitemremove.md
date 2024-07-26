---
title: OnItemRemove
index: true
order: 2
category:
  - Guide
---

# OnItemRemove
This event is triggered when item_remove is triggered.
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnItemRemove", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|     Key    | Data Type |
| :--------: | :-------: |
|  `userid`  |   `int`   |
|   `item`   |  `string` |
| `defindex` |   `int`   |
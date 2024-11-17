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
--- @param event Event
--- @return number|nil EventResult
AddEventHandler("OnItemRemove", function(event)
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
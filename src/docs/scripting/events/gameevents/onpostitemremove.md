---
title: OnPostItemRemove
index: true
order: 2
category:
  - Guide
---

# OnPostItemRemove
This event is triggered after item_remove is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number|nil EventResult
AddEventHandler("OnPostItemRemove", function(event)
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
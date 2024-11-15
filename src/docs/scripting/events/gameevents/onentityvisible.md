---
title: OnEntityVisible
index: true
order: 2
category:
  - Guide
---

# OnEntityVisible
This event is triggered when entity_visible is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number EventResult
AddEventHandler("OnEntityVisible", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|      Key     | Data Type |
| :----------: | :-------: |
|   `userid`   |   `int`   |
|   `subject`  |   `int`   |
|  `classname` |  `string` |
| `entityname` |  `string` |
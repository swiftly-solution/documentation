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
@event returns void
AddEventHandler("OnEntityVisible", function(event --[[ Event ]])
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
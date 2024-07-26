---
title: OnPostEntityVisible
index: true
order: 2
category:
  - Guide
---

# OnPostEntityVisible
This event is triggered after entity_visible is triggered.
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnPostEntityVisible", function(event --[[ Event ]])
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
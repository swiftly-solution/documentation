---
title: OnPostDzItemInteraction
index: true
order: 2
category:
  - Guide
---

# OnPostDzItemInteraction
This event is triggered after dz_item_interaction is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number EventResult
AddEventHandler("OnPostDzItemInteraction", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key    | Data Type |
| :-------: | :-------: |
|  `userid` |   `int`   |
| `subject` |   `int`   |
|   `type`  |  `string` |
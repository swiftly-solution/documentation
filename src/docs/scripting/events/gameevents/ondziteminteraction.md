---
title: OnDzItemInteraction
index: true
order: 2
category:
  - Guide
---

# OnDzItemInteraction
This event is triggered when dz_item_interaction is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number EventResult
AddEventHandler("OnDzItemInteraction", function(event)
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
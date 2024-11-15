---
title: OnLootCrateVisible
index: true
order: 2
category:
  - Guide
---

# OnLootCrateVisible
This event is triggered when loot_crate_visible is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number EventResult
AddEventHandler("OnLootCrateVisible", function(event)
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
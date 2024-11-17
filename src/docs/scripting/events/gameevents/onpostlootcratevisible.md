---
title: OnPostLootCrateVisible
index: true
order: 2
category:
  - Guide
---

# OnPostLootCrateVisible
This event is triggered after loot_crate_visible is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number|nil EventResult
AddEventHandler("OnPostLootCrateVisible", function(event)
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
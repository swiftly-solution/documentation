---
title: OnLootCrateVisible
index: true
order: 2
category:
  - Guide
---

# OnLootCrateVisible
This event is triggered when loot_crate_visible is triggered
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnLootCrateVisible", function(event --[[ Event ]])
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
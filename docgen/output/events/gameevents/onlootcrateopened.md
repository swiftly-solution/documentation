---
title: OnLootCrateOpened
index: true
order: 2
category:
  - Guide
---

# OnLootCrateOpened
This event is triggered when loot_crate_opened is triggered
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnLootCrateOpened", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
| `userid` |   `int`   |
|  `type`  |  `string` |
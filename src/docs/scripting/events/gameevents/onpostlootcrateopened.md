---
title: OnPostLootCrateOpened
index: true
order: 2
category:
  - Guide
---

# OnPostLootCrateOpened
This event is triggered after loot_crate_opened is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number EventResult
AddEventHandler("OnPostLootCrateOpened", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
| `userid` |   `int`   |
|  `type`  |  `string` |
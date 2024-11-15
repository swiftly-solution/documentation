---
title: OnPostPlayerFullUpdate
index: true
order: 2
category:
  - Guide
---

# OnPostPlayerFullUpdate
This event is triggered after player_full_update is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number EventResult
AddEventHandler("OnPostPlayerFullUpdate", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
| `userid` |   `int`   |
|  `count` |   `int`   |
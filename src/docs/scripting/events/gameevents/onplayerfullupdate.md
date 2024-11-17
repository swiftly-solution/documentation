---
title: OnPlayerFullUpdate
index: true
order: 2
category:
  - Guide
---

# OnPlayerFullUpdate
This event is triggered when player_full_update is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number|nil EventResult
AddEventHandler("OnPlayerFullUpdate", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
| `userid` |   `int`   |
|  `count` |   `int`   |
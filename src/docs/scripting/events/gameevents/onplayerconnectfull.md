---
title: OnPlayerConnectFull
index: true
order: 2
category:
  - Guide
---

# OnPlayerConnectFull
This event is triggered when player_connect_full is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number|nil EventResult
AddEventHandler("OnPlayerConnectFull", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
| `userid` |   `int`   |
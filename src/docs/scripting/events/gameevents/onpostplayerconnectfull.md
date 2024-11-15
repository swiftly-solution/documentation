---
title: OnPostPlayerConnectFull
index: true
order: 2
category:
  - Guide
---

# OnPostPlayerConnectFull
This event is triggered after player_connect_full is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number EventResult
AddEventHandler("OnPostPlayerConnectFull", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
| `userid` |   `int`   |
---
title: OnPostPlayerDisconnect
index: true
order: 2
category:
  - Guide
---

# OnPostPlayerDisconnect
This event is triggered after player_disconnect is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number EventResult
AddEventHandler("OnPostPlayerDisconnect", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|     Key     | Data Type |
| :---------: | :-------: |
|   `userid`  |   `int`   |
|   `reason`  |   `int`   |
|    `name`   |  `string` |
| `networkid` |  `string` |
|    `xuid`   |  `uint64` |
|  `PlayerID` |   `int`   |
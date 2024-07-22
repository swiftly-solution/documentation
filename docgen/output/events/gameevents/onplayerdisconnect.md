---
title: OnPlayerDisconnect
index: true
order: 2
category:
  - Guide
---

# OnPlayerDisconnect
This event is triggered when a client was disconnected
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnPlayerDisconnect", function(event --[[ Event ]])
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
|  `PlayerID` |   `int`   |
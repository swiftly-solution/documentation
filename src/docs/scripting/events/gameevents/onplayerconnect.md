---
title: OnPlayerConnect
index: true
order: 2
category:
  - Guide
---

# OnPlayerConnect
This event is triggered when player_connect is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number|nil EventResult
AddEventHandler("OnPlayerConnect", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|     Key     | Data Type |
| :---------: | :-------: |
|    `name`   |  `string` |
|   `userid`  |   `int`   |
| `networkid` |  `string` |
|    `xuid`   |  `uint64` |
|  `address`  |  `string` |
|    `bot`    | `boolean` |
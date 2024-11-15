---
title: OnPostPlayerConnect
index: true
order: 2
category:
  - Guide
---

# OnPostPlayerConnect
This event is triggered after player_connect is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number EventResult
AddEventHandler("OnPostPlayerConnect", function(event)
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
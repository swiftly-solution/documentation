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
@event returns void
AddEventHandler("OnPostPlayerConnect", function(event --[[ Event ]])
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
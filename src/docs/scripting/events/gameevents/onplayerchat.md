---
title: OnPlayerChat
index: true
order: 2
category:
  - Guide
---

# OnPlayerChat
This event is triggered when player_chat is triggered.
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnPlayerChat", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|     Key    | Data Type |
| :--------: | :-------: |
| `teamonly` | `boolean` |
|  `userid`  |   `int`   |
|   `text`   |  `string` |
| `playerid` |   `int`   |
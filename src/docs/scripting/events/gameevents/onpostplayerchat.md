---
title: OnPostPlayerChat
index: true
order: 2
category:
  - Guide
---

# OnPostPlayerChat
This event is triggered after player_chat is triggered.
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnPostPlayerChat", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|     Key    | Data Type |
| :--------: | :-------: |
| `teamonly` | `boolean` |
|  `userid`  |   `int`   |
| `playerid` |   `int`   |
|   `text`   |  `string` |
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
--- @param event Event
--- @return number EventResult
AddEventHandler("OnPostPlayerChat", function(event)
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
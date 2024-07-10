---
title: OnPlayerInfo
index: true
order: 2
category:
  - Guide
---

# OnPlayerInfo
This event is triggered when a player changed his name
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnPlayerInfo", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
|  `name`  |  `string` |
| `userid` |   `int`   |
|   `bot`  | `boolean` |
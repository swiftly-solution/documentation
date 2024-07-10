---
title: OnGameMessage
index: true
order: 2
category:
  - Guide
---

# OnGameMessage
This event is triggered when a message send by game logic to everyone
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnGameMessage", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
| `target` |   `int`   |
|  `text`  |  `string` |
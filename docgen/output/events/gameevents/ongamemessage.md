---
title: OnGameMessage
index: true
order: 2
category:
  - Guide
---

# OnGameMessage
This event is triggered when game_message is triggered.
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
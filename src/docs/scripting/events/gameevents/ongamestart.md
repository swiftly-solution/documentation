---
title: OnGameStart
index: true
order: 2
category:
  - Guide
---

# OnGameStart
This event is triggered when game_start is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number EventResult
AddEventHandler("OnGameStart", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|      Key      | Data Type |
| :-----------: | :-------: |
| `roundslimit` |   `int`   |
|  `timelimit`  |   `int`   |
|  `fraglimit`  |   `int`   |
|  `objective`  |  `string` |
---
title: OnGameStart
index: true
order: 2
category:
  - Guide
---

# OnGameStart
This event is triggered when a new game starts
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnGameStart", function(event --[[ Event ]])
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
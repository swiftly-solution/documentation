---
title: OnPostGameStart
index: true
order: 2
category:
  - Guide
---

# OnPostGameStart
This event is triggered after game_start is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number EventResult
AddEventHandler("OnPostGameStart", function(event)
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
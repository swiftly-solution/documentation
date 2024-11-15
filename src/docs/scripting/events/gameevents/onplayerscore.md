---
title: OnPlayerScore
index: true
order: 2
category:
  - Guide
---

# OnPlayerScore
This event is triggered when player_score is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number EventResult
AddEventHandler("OnPlayerScore", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
| `userid` |   `int`   |
|  `kills` |   `int`   |
| `deaths` |   `int`   |
|  `score` |   `int`   |
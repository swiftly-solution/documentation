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
@event returns void
AddEventHandler("OnPlayerScore", function(event --[[ Event ]])
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
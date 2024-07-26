---
title: OnPostPlayerScore
index: true
order: 2
category:
  - Guide
---

# OnPostPlayerScore
This event is triggered after player_score is triggered.
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnPostPlayerScore", function(event --[[ Event ]])
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
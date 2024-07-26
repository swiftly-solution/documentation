---
title: OnMatchEndConditions
index: true
order: 2
category:
  - Guide
---

# OnMatchEndConditions
This event is triggered when match_end_conditions is triggered.
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnMatchEndConditions", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|      Key     | Data Type |
| :----------: | :-------: |
|    `frags`   |   `int`   |
| `max_rounds` |   `int`   |
| `win_rounds` |   `int`   |
|    `time`    |   `int`   |
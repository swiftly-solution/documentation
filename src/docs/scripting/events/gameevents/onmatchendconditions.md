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
--- @param event Event
--- @return number|nil EventResult
AddEventHandler("OnMatchEndConditions", function(event)
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
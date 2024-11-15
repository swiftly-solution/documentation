---
title: OnPostMatchEndConditions
index: true
order: 2
category:
  - Guide
---

# OnPostMatchEndConditions
This event is triggered after match_end_conditions is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number EventResult
AddEventHandler("OnPostMatchEndConditions", function(event)
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
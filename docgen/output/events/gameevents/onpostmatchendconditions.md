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
@event returns void
AddEventHandler("OnPostMatchEndConditions", function(event --[[ Event ]])
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
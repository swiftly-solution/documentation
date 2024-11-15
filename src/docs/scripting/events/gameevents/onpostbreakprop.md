---
title: OnPostBreakProp
index: true
order: 2
category:
  - Guide
---

# OnPostBreakProp
This event is triggered after break_prop is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number EventResult
AddEventHandler("OnPostBreakProp", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|        Key       | Data Type |
| :--------------: | :-------: |
|    `entindex`    |   `int`   |
|     `userid`     |   `int`   |
|   `player_held`  | `boolean` |
|  `player_thrown` | `boolean` |
| `player_dropped` | `boolean` |
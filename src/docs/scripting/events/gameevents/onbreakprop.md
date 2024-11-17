---
title: OnBreakProp
index: true
order: 2
category:
  - Guide
---

# OnBreakProp
This event is triggered when break_prop is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number|nil EventResult
AddEventHandler("OnBreakProp", function(event)
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
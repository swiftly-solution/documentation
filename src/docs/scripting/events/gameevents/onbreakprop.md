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
@event returns void
AddEventHandler("OnBreakProp", function(event --[[ Event ]])
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
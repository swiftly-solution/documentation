---
title: OnBreakBreakable
index: true
order: 2
category:
  - Guide
---

# OnBreakBreakable
This event is triggered when break_breakable is triggered
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnBreakBreakable", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|     Key    | Data Type |
| :--------: | :-------: |
| `entindex` |   `int`   |
|  `userid`  |   `int`   |
| `material` |   `int`   |
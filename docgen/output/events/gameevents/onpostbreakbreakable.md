---
title: OnPostBreakBreakable
index: true
order: 2
category:
  - Guide
---

# OnPostBreakBreakable
This event is triggered after break_breakable is triggered.
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnPostBreakBreakable", function(event --[[ Event ]])
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
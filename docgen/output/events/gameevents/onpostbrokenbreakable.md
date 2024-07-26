---
title: OnPostBrokenBreakable
index: true
order: 2
category:
  - Guide
---

# OnPostBrokenBreakable
This event is triggered after broken_breakable is triggered.
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnPostBrokenBreakable", function(event --[[ Event ]])
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
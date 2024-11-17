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
--- @param event Event
--- @return number|nil EventResult
AddEventHandler("OnPostBrokenBreakable", function(event)
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
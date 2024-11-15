---
title: OnBrokenBreakable
index: true
order: 2
category:
  - Guide
---

# OnBrokenBreakable
This event is triggered when broken_breakable is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number EventResult
AddEventHandler("OnBrokenBreakable", function(event)
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
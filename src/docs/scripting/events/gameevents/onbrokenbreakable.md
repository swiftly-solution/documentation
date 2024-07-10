---
title: OnBrokenBreakable
index: true
order: 2
category:
  - Guide
---

# OnBrokenBreakable
This event is triggered when broken_breakable is triggered
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnBrokenBreakable", function(event --[[ Event ]])
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
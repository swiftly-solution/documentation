---
title: OnRoundStart
index: true
order: 2
category:
  - Guide
---

# OnRoundStart
This event is triggered when round_start is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number|nil EventResult
AddEventHandler("OnRoundStart", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|     Key     | Data Type |
| :---------: | :-------: |
| `timelimit` |   `int`   |
| `fraglimit` |   `int`   |
| `objective` |  `string` |
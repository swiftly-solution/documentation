---
title: OnRoundStart
index: true
order: 2
category:
  - Guide
---

# OnRoundStart
This event is triggered when round_start is triggered
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnRoundStart", function(event --[[ Event ]])
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
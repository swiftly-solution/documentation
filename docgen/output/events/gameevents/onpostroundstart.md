---
title: OnPostRoundStart
index: true
order: 2
category:
  - Guide
---

# OnPostRoundStart
This event is triggered after round_start is triggered.
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnPostRoundStart", function(event --[[ Event ]])
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
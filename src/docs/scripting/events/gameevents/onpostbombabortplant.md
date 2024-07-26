---
title: OnPostBombAbortplant
index: true
order: 2
category:
  - Guide
---

# OnPostBombAbortplant
This event is triggered after bomb_abortplant is triggered.
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnPostBombAbortplant", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
| `userid` |   `int`   |
|  `site`  |   `int`   |
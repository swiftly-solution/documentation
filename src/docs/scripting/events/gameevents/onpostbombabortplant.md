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
--- @param event Event
--- @return number EventResult
AddEventHandler("OnPostBombAbortplant", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
| `userid` |   `int`   |
|  `site`  |   `int`   |
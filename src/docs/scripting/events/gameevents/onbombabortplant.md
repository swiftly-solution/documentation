---
title: OnBombAbortplant
index: true
order: 2
category:
  - Guide
---

# OnBombAbortplant
This event is triggered when bomb_abortplant is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number|nil EventResult
AddEventHandler("OnBombAbortplant", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
| `userid` |   `int`   |
|  `site`  |   `int`   |
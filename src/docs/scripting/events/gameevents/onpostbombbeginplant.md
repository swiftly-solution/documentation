---
title: OnPostBombBeginplant
index: true
order: 2
category:
  - Guide
---

# OnPostBombBeginplant
This event is triggered after bomb_beginplant is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number EventResult
AddEventHandler("OnPostBombBeginplant", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
| `userid` |   `int`   |
|  `site`  |   `int`   |
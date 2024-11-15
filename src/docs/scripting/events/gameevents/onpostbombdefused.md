---
title: OnPostBombDefused
index: true
order: 2
category:
  - Guide
---

# OnPostBombDefused
This event is triggered after bomb_defused is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number EventResult
AddEventHandler("OnPostBombDefused", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
| `userid` |   `int`   |
|  `site`  |   `int`   |
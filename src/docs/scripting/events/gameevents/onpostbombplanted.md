---
title: OnPostBombPlanted
index: true
order: 2
category:
  - Guide
---

# OnPostBombPlanted
This event is triggered after bomb_planted is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number EventResult
AddEventHandler("OnPostBombPlanted", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
| `userid` |   `int`   |
|  `site`  |   `int`   |
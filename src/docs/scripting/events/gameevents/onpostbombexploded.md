---
title: OnPostBombExploded
index: true
order: 2
category:
  - Guide
---

# OnPostBombExploded
This event is triggered after bomb_exploded is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number EventResult
AddEventHandler("OnPostBombExploded", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
| `userid` |   `int`   |
|  `site`  |   `int`   |
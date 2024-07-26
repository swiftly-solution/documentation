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
@event returns void
AddEventHandler("OnPostBombPlanted", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
| `userid` |   `int`   |
|  `site`  |   `int`   |
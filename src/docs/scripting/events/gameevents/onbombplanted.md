---
title: OnBombPlanted
index: true
order: 2
category:
  - Guide
---

# OnBombPlanted
This event is triggered when bomb_planted is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number EventResult
AddEventHandler("OnBombPlanted", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
| `userid` |   `int`   |
|  `site`  |   `int`   |
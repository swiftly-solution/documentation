---
title: OnGameEnd
index: true
order: 2
category:
  - Guide
---

# OnGameEnd
This event is triggered when a game ended
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnGameEnd", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
| `winner` |   `int`   |
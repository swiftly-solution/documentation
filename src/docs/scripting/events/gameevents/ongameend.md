---
title: OnGameEnd
index: true
order: 2
category:
  - Guide
---

# OnGameEnd
This event is triggered when game_end is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number|nil EventResult
AddEventHandler("OnGameEnd", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
| `winner` |   `int`   |
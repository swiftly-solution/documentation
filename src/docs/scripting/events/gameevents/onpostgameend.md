---
title: OnPostGameEnd
index: true
order: 2
category:
  - Guide
---

# OnPostGameEnd
This event is triggered after game_end is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number EventResult
AddEventHandler("OnPostGameEnd", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
| `winner` |   `int`   |
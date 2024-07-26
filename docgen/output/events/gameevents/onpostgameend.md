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
@event returns void
AddEventHandler("OnPostGameEnd", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
| `winner` |   `int`   |
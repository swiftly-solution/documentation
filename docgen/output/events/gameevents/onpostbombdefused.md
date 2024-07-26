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
@event returns void
AddEventHandler("OnPostBombDefused", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
| `userid` |   `int`   |
|  `site`  |   `int`   |
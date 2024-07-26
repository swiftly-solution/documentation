---
title: OnPostBombBeginplant
index: true
order: 2
category:
  - Guide
---

# OnPostBombBeginplant
This event is triggered after bomb_beginplant is triggered.
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnPostBombBeginplant", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
| `userid` |   `int`   |
|  `site`  |   `int`   |
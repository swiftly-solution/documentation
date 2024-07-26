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
@event returns void
AddEventHandler("OnPostBombExploded", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
| `userid` |   `int`   |
|  `site`  |   `int`   |
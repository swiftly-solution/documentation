---
title: OnPostBombDropped
index: true
order: 2
category:
  - Guide
---

# OnPostBombDropped
This event is triggered after bomb_dropped is triggered.
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnPostBombDropped", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|     Key    | Data Type |
| :--------: | :-------: |
|  `userid`  |   `int`   |
| `entindex` |   `int`   |
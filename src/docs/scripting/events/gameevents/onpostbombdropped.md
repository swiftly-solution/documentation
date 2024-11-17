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
--- @param event Event
--- @return number|nil EventResult
AddEventHandler("OnPostBombDropped", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|     Key    | Data Type |
| :--------: | :-------: |
|  `userid`  |   `int`   |
| `entindex` |   `int`   |
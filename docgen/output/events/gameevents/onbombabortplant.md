---
title: OnBombAbortplant
index: true
order: 2
category:
  - Guide
---

# OnBombAbortplant
This event is triggered when bomb_abortplant is triggered
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnBombAbortplant", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
| `userid` |   `int`   |
|  `site`  |   `int`   |
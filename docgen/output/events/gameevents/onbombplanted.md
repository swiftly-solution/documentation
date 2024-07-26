---
title: OnBombPlanted
index: true
order: 2
category:
  - Guide
---

# OnBombPlanted
This event is triggered when bomb_planted is triggered.
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnBombPlanted", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
| `userid` |   `int`   |
|  `site`  |   `int`   |
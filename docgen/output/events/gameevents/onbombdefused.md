---
title: OnBombDefused
index: true
order: 2
category:
  - Guide
---

# OnBombDefused
This event is triggered when bomb_defused is triggered
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnBombDefused", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
| `userid` |   `int`   |
|  `site`  |   `int`   |
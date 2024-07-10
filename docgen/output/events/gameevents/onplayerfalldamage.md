---
title: OnPlayerFalldamage
index: true
order: 2
category:
  - Guide
---

# OnPlayerFalldamage
This event is triggered when player_falldamage is triggered
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnPlayerFalldamage", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
| `userid` |   `int`   |
| `damage` |  `float`  |
---
title: OnPlayerFalldamage
index: true
order: 2
category:
  - Guide
---

# OnPlayerFalldamage
This event is triggered when player_falldamage is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number|nil EventResult
AddEventHandler("OnPlayerFalldamage", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
| `userid` |   `int`   |
| `damage` |  `float`  |
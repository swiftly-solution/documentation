---
title: OnPostPlayerFalldamage
index: true
order: 2
category:
  - Guide
---

# OnPostPlayerFalldamage
This event is triggered after player_falldamage is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number EventResult
AddEventHandler("OnPostPlayerFalldamage", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
| `userid` |   `int`   |
| `damage` |  `float`  |
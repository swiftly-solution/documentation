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
@event returns void
AddEventHandler("OnPostPlayerFalldamage", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
| `userid` |   `int`   |
| `damage` |  `float`  |
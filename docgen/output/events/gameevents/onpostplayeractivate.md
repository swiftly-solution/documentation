---
title: OnPostPlayerActivate
index: true
order: 2
category:
  - Guide
---

# OnPostPlayerActivate
This event is triggered after player_activate is triggered.
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnPostPlayerActivate", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
| `userid` |   `int`   |
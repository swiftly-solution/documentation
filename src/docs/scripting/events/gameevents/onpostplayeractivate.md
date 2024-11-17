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
--- @param event Event
--- @return number|nil EventResult
AddEventHandler("OnPostPlayerActivate", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
| `userid` |   `int`   |
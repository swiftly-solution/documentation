---
title: OnPostPlayerFootstep
index: true
order: 2
category:
  - Guide
---

# OnPostPlayerFootstep
This event is triggered after player_footstep is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number|nil EventResult
AddEventHandler("OnPostPlayerFootstep", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
| `userid` |   `int`   |
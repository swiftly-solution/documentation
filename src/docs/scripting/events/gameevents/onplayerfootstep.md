---
title: OnPlayerFootstep
index: true
order: 2
category:
  - Guide
---

# OnPlayerFootstep
This event is triggered when player_footstep is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number|nil EventResult
AddEventHandler("OnPlayerFootstep", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
| `userid` |   `int`   |
---
title: OnPostExitRescueZone
index: true
order: 2
category:
  - Guide
---

# OnPostExitRescueZone
This event is triggered after exit_rescue_zone is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number|nil EventResult
AddEventHandler("OnPostExitRescueZone", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
| `userid` |   `int`   |
---
title: OnExitRescueZone
index: true
order: 2
category:
  - Guide
---

# OnExitRescueZone
This event is triggered when exit_rescue_zone is triggered
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnExitRescueZone", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
| `userid` |   `int`   |
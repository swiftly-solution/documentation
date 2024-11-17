---
title: OnEnterRescueZone
index: true
order: 2
category:
  - Guide
---

# OnEnterRescueZone
This event is triggered when enter_rescue_zone is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number|nil EventResult
AddEventHandler("OnEnterRescueZone", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
| `userid` |   `int`   |
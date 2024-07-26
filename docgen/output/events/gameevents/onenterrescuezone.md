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
@event returns void
AddEventHandler("OnEnterRescueZone", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
| `userid` |   `int`   |
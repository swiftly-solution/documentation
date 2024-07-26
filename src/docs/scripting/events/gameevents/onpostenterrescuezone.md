---
title: OnPostEnterRescueZone
index: true
order: 2
category:
  - Guide
---

# OnPostEnterRescueZone
This event is triggered after enter_rescue_zone is triggered.
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnPostEnterRescueZone", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
| `userid` |   `int`   |
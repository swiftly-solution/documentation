---
title: OnPostHostageStopsFollowing
index: true
order: 2
category:
  - Guide
---

# OnPostHostageStopsFollowing
This event is triggered after hostage_stops_following is triggered.
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnPostHostageStopsFollowing", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key    | Data Type |
| :-------: | :-------: |
|  `userid` |   `int`   |
| `hostage` |   `int`   |
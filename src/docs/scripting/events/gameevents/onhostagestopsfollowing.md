---
title: OnHostageStopsFollowing
index: true
order: 2
category:
  - Guide
---

# OnHostageStopsFollowing
This event is triggered when hostage_stops_following is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number EventResult
AddEventHandler("OnHostageStopsFollowing", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key    | Data Type |
| :-------: | :-------: |
|  `userid` |   `int`   |
| `hostage` |   `int`   |
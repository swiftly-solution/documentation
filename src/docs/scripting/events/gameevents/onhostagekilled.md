---
title: OnHostageKilled
index: true
order: 2
category:
  - Guide
---

# OnHostageKilled
This event is triggered when hostage_killed is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number EventResult
AddEventHandler("OnHostageKilled", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key    | Data Type |
| :-------: | :-------: |
|  `userid` |   `int`   |
| `hostage` |   `int`   |
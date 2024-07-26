---
title: OnPostHostageKilled
index: true
order: 2
category:
  - Guide
---

# OnPostHostageKilled
This event is triggered after hostage_killed is triggered.
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnPostHostageKilled", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key    | Data Type |
| :-------: | :-------: |
|  `userid` |   `int`   |
| `hostage` |   `int`   |
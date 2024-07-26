---
title: OnPostHostageFollows
index: true
order: 2
category:
  - Guide
---

# OnPostHostageFollows
This event is triggered after hostage_follows is triggered.
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnPostHostageFollows", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key    | Data Type |
| :-------: | :-------: |
|  `userid` |   `int`   |
| `hostage` |   `int`   |
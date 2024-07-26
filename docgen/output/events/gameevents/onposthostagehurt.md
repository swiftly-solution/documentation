---
title: OnPostHostageHurt
index: true
order: 2
category:
  - Guide
---

# OnPostHostageHurt
This event is triggered after hostage_hurt is triggered.
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnPostHostageHurt", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key    | Data Type |
| :-------: | :-------: |
|  `userid` |   `int`   |
| `hostage` |   `int`   |
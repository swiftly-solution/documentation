---
title: OnHostageHurt
index: true
order: 2
category:
  - Guide
---

# OnHostageHurt
This event is triggered when hostage_hurt is triggered.
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnHostageHurt", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key    | Data Type |
| :-------: | :-------: |
|  `userid` |   `int`   |
| `hostage` |   `int`   |
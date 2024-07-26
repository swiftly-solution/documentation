---
title: OnHostageFollows
index: true
order: 2
category:
  - Guide
---

# OnHostageFollows
This event is triggered when hostage_follows is triggered.
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnHostageFollows", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key    | Data Type |
| :-------: | :-------: |
|  `userid` |   `int`   |
| `hostage` |   `int`   |
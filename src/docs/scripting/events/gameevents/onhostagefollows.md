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
--- @param event Event
--- @return number|nil EventResult
AddEventHandler("OnHostageFollows", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key    | Data Type |
| :-------: | :-------: |
|  `userid` |   `int`   |
| `hostage` |   `int`   |
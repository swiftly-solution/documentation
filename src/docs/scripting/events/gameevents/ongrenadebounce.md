---
title: OnGrenadeBounce
index: true
order: 2
category:
  - Guide
---

# OnGrenadeBounce
This event is triggered when grenade_bounce is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number|nil EventResult
AddEventHandler("OnGrenadeBounce", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
| `userid` |   `int`   |
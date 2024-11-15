---
title: OnPostGrenadeBounce
index: true
order: 2
category:
  - Guide
---

# OnPostGrenadeBounce
This event is triggered after grenade_bounce is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number EventResult
AddEventHandler("OnPostGrenadeBounce", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
| `userid` |   `int`   |
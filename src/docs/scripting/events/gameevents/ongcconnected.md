---
title: OnGcConnected
index: true
order: 2
category:
  - Guide
---

# OnGcConnected
This event is triggered when gc_connected is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number|nil EventResult
AddEventHandler("OnGcConnected", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |
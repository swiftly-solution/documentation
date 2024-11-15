---
title: OnPostGcConnected
index: true
order: 2
category:
  - Guide
---

# OnPostGcConnected
This event is triggered after gc_connected is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number EventResult
AddEventHandler("OnPostGcConnected", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |
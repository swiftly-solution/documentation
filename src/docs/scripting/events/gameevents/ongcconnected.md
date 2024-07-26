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
@event returns void
AddEventHandler("OnGcConnected", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |
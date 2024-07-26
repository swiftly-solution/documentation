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
@event returns void
AddEventHandler("OnPostGcConnected", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |
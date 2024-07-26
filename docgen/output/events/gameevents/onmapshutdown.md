---
title: OnMapShutdown
index: true
order: 2
category:
  - Guide
---

# OnMapShutdown
This event is triggered when map_shutdown is triggered.
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnMapShutdown", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |
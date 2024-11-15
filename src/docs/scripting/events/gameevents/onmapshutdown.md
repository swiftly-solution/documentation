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
--- @param event Event
--- @return number EventResult
AddEventHandler("OnMapShutdown", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |
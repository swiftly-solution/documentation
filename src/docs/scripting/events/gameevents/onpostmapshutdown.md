---
title: OnPostMapShutdown
index: true
order: 2
category:
  - Guide
---

# OnPostMapShutdown
This event is triggered after map_shutdown is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number|nil EventResult
AddEventHandler("OnPostMapShutdown", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |
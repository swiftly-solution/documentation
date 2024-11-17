---
title: OnPostServerPreShutdown
index: true
order: 2
category:
  - Guide
---

# OnPostServerPreShutdown
This event is triggered after server_pre_shutdown is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number|nil EventResult
AddEventHandler("OnPostServerPreShutdown", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
| `reason` |  `string` |
---
title: OnPostServerShutdown
index: true
order: 2
category:
  - Guide
---

# OnPostServerShutdown
This event is triggered after server_shutdown is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number EventResult
AddEventHandler("OnPostServerShutdown", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
| `reason` |  `string` |
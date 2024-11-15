---
title: OnServerPreShutdown
index: true
order: 2
category:
  - Guide
---

# OnServerPreShutdown
This event is triggered when server_pre_shutdown is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number EventResult
AddEventHandler("OnServerPreShutdown", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
| `reason` |  `string` |
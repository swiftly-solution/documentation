---
title: OnServerShutdown
index: true
order: 2
category:
  - Guide
---

# OnServerShutdown
This event is triggered when server_shutdown is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number|nil EventResult
AddEventHandler("OnServerShutdown", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
| `reason` |  `string` |
---
title: OnServerPreShutdown
index: true
order: 2
category:
  - Guide
---

# OnServerPreShutdown
This event is triggered when server is about to be shut down
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnServerPreShutdown", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
| `reason` |  `string` |
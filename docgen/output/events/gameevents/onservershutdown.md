---
title: OnServerShutdown
index: true
order: 2
category:
  - Guide
---

# OnServerShutdown
This event is triggered when server shut down
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnServerShutdown", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
| `reason` |  `string` |
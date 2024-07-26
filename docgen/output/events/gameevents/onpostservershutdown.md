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
@event returns void
AddEventHandler("OnPostServerShutdown", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
| `reason` |  `string` |
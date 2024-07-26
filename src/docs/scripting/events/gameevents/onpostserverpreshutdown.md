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
@event returns void
AddEventHandler("OnPostServerPreShutdown", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
| `reason` |  `string` |
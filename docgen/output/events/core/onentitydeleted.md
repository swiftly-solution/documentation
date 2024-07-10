---
title: OnEntityDeleted
index: true
order: 2
category:
  - Guide
---

# OnEntityDeleted
This game event is triggered when an entity is deleted from the server.
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnEntityDeleted", function(event --[[ Event ]], entityptr --[[ string ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
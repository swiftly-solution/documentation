---
title: OnEntityCreated
index: true
order: 2
category:
  - Guide
---

# OnEntityCreated
This game event is triggered when an entity is created on the server.
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnEntityCreated", function(event --[[ Event ]], entityptr --[[ string ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
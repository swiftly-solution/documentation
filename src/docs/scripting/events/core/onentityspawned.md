---
title: OnEntitySpawned
index: true
order: 2
category:
  - Guide
---

# OnEntitySpawned
This game event is triggered when an entity is spawned on the server.
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnEntitySpawned", function(event --[[ Event ]], entityptr --[[ string ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
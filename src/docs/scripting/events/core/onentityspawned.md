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
--- @param event Event
--- @param entityptr string
--- @return number|nil EventResult
--- @event returns nil Via event:SetReturn
AddEventHandler("OnEntitySpawned", function(event, entityptr)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
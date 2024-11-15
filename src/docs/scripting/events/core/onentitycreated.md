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
--- @param event Event
--- @param entityptr string
--- @return number EventResult
--- @event returns nil Via event:SetReturn
AddEventHandler("OnEntityCreated", function(event, entityptr)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
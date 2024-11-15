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
--- @param event Event
--- @param entityptr string
--- @return number EventResult
--- @event returns nil Via event:SetReturn
AddEventHandler("OnEntityDeleted", function(event, entityptr)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
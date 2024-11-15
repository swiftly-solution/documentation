---
title: OnEntityAcceptInput
index: true
order: 2
category:
  - Guide
---

# OnEntityAcceptInput
This game event is triggered when an entity receives an input.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @param entityptr string
--- @param inputname string
--- @param activatorptr string
--- @param callerptr string
--- @param value string
--- @param outputID number
--- @return number EventResult
--- @event returns boolean Via event:SetReturn
AddEventHandler("OnEntityAcceptInput", function(event, entityptr, inputname, activatorptr, callerptr, value, outputID)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
---
title: OnClientConnect
index: true
order: 2
category:
  - Guide
---

# OnClientConnect
This game event is triggered when a client connects.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @param playerid number
--- @return number|nil EventResult
--- @event returns boolean Via event:SetReturn
AddEventHandler("OnClientConnect", function(event, playerid)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
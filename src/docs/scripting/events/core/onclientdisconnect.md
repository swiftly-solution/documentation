---
title: OnClientDisconnect
index: true
order: 2
category:
  - Guide
---

# OnClientDisconnect
This game event is triggered when a client disconnects.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @param playerid number
--- @return number|nil EventResult
--- @event returns nil Via event:SetReturn
AddEventHandler("OnClientDisconnect", function(event, playerid)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
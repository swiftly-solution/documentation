---
title: OnClientKeyStateChange
index: true
order: 2
category:
  - Guide
---

# OnClientKeyStateChange
This game event is triggered when a key state changes for a client.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @param playerid number
--- @param key string
--- @param pressed boolean
--- @return number EventResult
--- @event returns nil Via event:SetReturn
AddEventHandler("OnClientKeyStateChange", function(event, playerid, key, pressed)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
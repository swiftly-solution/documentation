---
title: OnClientConvarQuery
index: true
order: 2
category:
  - Guide
---

# OnClientConvarQuery
This game event is triggered when a player's convar is being queried.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @param playerid number
--- @param convar_name string
--- @param convar_value string
--- @return number EventResult
--- @event returns nil Via event:SetReturn
AddEventHandler("OnClientConvarQuery", function(event, playerid, convar_name, convar_value)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
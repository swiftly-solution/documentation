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
@event returns void
AddEventHandler("OnClientConvarQuery", function(event --[[ Event ]], playerid --[[ number ]], convar_name --[[ string ]], convar_value --[[ string ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
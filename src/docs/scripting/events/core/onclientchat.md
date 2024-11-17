---
title: OnClientChat
index: true
order: 2
category:
  - Guide
---

# OnClientChat
This game event is triggered when a player sends a text message.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @param playerid number
--- @param text string
--- @param teamonly boolean
--- @return number|nil EventResult
--- @event returns boolean Via event:SetReturn
AddEventHandler("OnClientChat", function(event, playerid, text, teamonly)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
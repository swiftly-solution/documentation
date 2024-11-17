---
title: OnClientCommand
index: true
order: 2
category:
  - Guide
---

# OnClientCommand
This game event is triggered when a client sends a command.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @param playerid number
--- @param command string
--- @return number|nil EventResult
--- @event returns boolean Via event:SetReturn
AddEventHandler("OnClientCommand", function(event, playerid, command)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
---
title: OnPlayerCheckTransmit
index: true
order: 2
category:
  - Guide
---

# OnPlayerCheckTransmit
This game event is triggered when a player checks for transmitting entities.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @param playerid number
--- @param transmitinfoptr string
--- @return number|nil EventResult
--- @event returns nil Via event:SetReturn
AddEventHandler("OnPlayerCheckTransmit", function(event, playerid, transmitinfoptr)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
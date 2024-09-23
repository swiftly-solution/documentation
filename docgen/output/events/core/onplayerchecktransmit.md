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
@event returns void
AddEventHandler("OnPlayerCheckTransmit", function(event --[[ Event ]], playerid --[[ number ]], transmitinfoptr --[[ string ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
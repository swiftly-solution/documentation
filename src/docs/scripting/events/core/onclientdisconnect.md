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
@event returns void
AddEventHandler("OnClientDisconnect", function(event --[[ Event ]], playerid --[[ number ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
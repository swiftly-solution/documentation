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
@event returns boolean
AddEventHandler("OnClientConnect", function(event --[[ Event ]], playerid --[[ number ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
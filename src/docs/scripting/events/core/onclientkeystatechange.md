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
@event returns void
AddEventHandler("OnClientKeyStateChange", function(event --[[ Event ]], playerid --[[ number ]], key --[[ string ]], pressed --[[ boolean ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
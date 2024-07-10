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
@event returns boolean
AddEventHandler("OnClientChat", function(event --[[ Event ]], playerid --[[ number ]], text --[[ string ]], teamonly --[[ boolean ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
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
@event returns boolean
AddEventHandler("OnClientCommand", function(event --[[ Event ]], playerid --[[ number ]], command --[[ string ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
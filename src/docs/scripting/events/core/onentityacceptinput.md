---
title: OnEntityAcceptInput
index: true
order: 2
category:
  - Guide
---

# OnEntityAcceptInput
This game event is triggered when an entity receives an input.
::: tabs
@tab Lua
```lua
@event returns boolean
AddEventHandler("OnEntityAcceptInput", function(event --[[ Event ]], entityptr --[[ string ]], inputname --[[ string ]], activatorptr --[[ string ]], callerptr --[[ string ]], value --[[ string ]], outputID --[[ number ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
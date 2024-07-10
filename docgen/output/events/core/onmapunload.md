---
title: OnMapUnload
index: true
order: 2
category:
  - Guide
---

# OnMapUnload
This game event is triggered when a map unloads.
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnMapUnload", function(event --[[ Event ]], map --[[ string ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
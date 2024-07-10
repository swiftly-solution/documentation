---
title: OnMapLoad
index: true
order: 2
category:
  - Guide
---

# OnMapLoad
This game event is triggered when a map loads.
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnMapLoad", function(event --[[ Event ]], map --[[ string ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
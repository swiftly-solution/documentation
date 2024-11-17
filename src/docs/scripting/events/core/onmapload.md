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
--- @param event Event
--- @param map string
--- @return number|nil EventResult
--- @event returns nil Via event:SetReturn
AddEventHandler("OnMapLoad", function(event, map)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
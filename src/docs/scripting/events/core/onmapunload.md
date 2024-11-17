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
--- @param event Event
--- @param map string
--- @return number|nil EventResult
--- @event returns nil Via event:SetReturn
AddEventHandler("OnMapUnload", function(event, map)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
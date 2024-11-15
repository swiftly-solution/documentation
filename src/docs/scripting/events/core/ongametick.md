---
title: OnGameTick
index: true
order: 2
category:
  - Guide
---

# OnGameTick
This game event is called at every server tick.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @param simulating boolean
--- @param bFirstTick boolean
--- @param bLastTick boolean
--- @return number EventResult
--- @event returns nil Via event:SetReturn
AddEventHandler("OnGameTick", function(event, simulating, bFirstTick, bLastTick)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
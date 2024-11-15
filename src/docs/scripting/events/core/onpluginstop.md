---
title: OnPluginStop
index: true
order: 2
category:
  - Guide
---

# OnPluginStop
This game event is triggered when the plugin stops.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number EventResult
--- @event returns nil Via event:SetReturn
AddEventHandler("OnPluginStop", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
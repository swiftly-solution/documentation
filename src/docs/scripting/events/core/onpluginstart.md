---
title: OnPluginStart
index: true
order: 2
category:
  - Guide
---

# OnPluginStart
This game event is triggered when the plugin starts.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number EventResult
--- @event returns nil Via event:SetReturn
AddEventHandler("OnPluginStart", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
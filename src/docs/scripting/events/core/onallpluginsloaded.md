---
title: OnAllPluginsLoaded
index: true
order: 2
category:
  - Guide
---

# OnAllPluginsLoaded
This game event is triggered when all the plugins are loaded.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number|nil EventResult
--- @event returns nil Via event:SetReturn
AddEventHandler("OnAllPluginsLoaded", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
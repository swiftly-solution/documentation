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
@event returns void
AddEventHandler("OnAllPluginsLoaded", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
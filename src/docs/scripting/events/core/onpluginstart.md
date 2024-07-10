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
@event returns void
AddEventHandler("OnPluginStart", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
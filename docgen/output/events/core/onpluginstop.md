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
@event returns void
AddEventHandler("OnPluginStop", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
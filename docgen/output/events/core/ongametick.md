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
@event returns void
AddEventHandler("OnGameTick", function(event --[[ Event ]], simulating --[[ boolean ]], bFirstTick --[[ boolean ]], bLastTick --[[ boolean ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
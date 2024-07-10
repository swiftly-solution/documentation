---
title: OnUpdateMatchmakingStats
index: true
order: 2
category:
  - Guide
---

# OnUpdateMatchmakingStats
This event is triggered when Fired when it's time to update matchmaking data at the end of a round.
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnUpdateMatchmakingStats", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |
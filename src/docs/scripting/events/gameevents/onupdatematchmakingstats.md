---
title: OnUpdateMatchmakingStats
index: true
order: 2
category:
  - Guide
---

# OnUpdateMatchmakingStats
This event is triggered when update_matchmaking_stats is triggered.
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
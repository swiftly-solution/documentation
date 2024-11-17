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
--- @param event Event
--- @return number|nil EventResult
AddEventHandler("OnUpdateMatchmakingStats", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |
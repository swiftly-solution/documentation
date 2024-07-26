---
title: OnPostUpdateMatchmakingStats
index: true
order: 2
category:
  - Guide
---

# OnPostUpdateMatchmakingStats
This event is triggered after update_matchmaking_stats is triggered.
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnPostUpdateMatchmakingStats", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |
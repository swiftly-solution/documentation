---
title: OnPlayerStatsUpdated
index: true
order: 2
category:
  - Guide
---

# OnPlayerStatsUpdated
This event is triggered when player_stats_updated is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number|nil EventResult
AddEventHandler("OnPlayerStatsUpdated", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|      Key      | Data Type |
| :-----------: | :-------: |
| `forceupload` | `boolean` |
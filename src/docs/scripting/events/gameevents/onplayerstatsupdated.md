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
@event returns void
AddEventHandler("OnPlayerStatsUpdated", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|      Key      | Data Type |
| :-----------: | :-------: |
| `forceupload` | `boolean` |
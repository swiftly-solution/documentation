---
title: OnPostPlayerStatsUpdated
index: true
order: 2
category:
  - Guide
---

# OnPostPlayerStatsUpdated
This event is triggered after player_stats_updated is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number|nil EventResult
AddEventHandler("OnPostPlayerStatsUpdated", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|      Key      | Data Type |
| :-----------: | :-------: |
| `forceupload` | `boolean` |
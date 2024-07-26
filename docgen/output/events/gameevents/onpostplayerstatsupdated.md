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
@event returns void
AddEventHandler("OnPostPlayerStatsUpdated", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|      Key      | Data Type |
| :-----------: | :-------: |
| `forceupload` | `boolean` |
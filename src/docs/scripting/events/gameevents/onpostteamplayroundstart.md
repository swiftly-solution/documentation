---
title: OnPostTeamplayRoundStart
index: true
order: 2
category:
  - Guide
---

# OnPostTeamplayRoundStart
This event is triggered after teamplay_round_start is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number|nil EventResult
AddEventHandler("OnPostTeamplayRoundStart", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|      Key     | Data Type |
| :----------: | :-------: |
| `full_reset` | `boolean` |
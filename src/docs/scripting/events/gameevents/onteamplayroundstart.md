---
title: OnTeamplayRoundStart
index: true
order: 2
category:
  - Guide
---

# OnTeamplayRoundStart
This event is triggered when teamplay_round_start is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number|nil EventResult
AddEventHandler("OnTeamplayRoundStart", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|      Key     | Data Type |
| :----------: | :-------: |
| `full_reset` | `boolean` |
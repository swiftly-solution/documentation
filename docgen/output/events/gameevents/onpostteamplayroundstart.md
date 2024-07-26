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
@event returns void
AddEventHandler("OnPostTeamplayRoundStart", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|      Key     | Data Type |
| :----------: | :-------: |
| `full_reset` | `boolean` |
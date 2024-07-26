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
@event returns void
AddEventHandler("OnTeamplayRoundStart", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|      Key     | Data Type |
| :----------: | :-------: |
| `full_reset` | `boolean` |
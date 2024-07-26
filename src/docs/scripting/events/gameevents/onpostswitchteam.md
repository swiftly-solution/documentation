---
title: OnPostSwitchTeam
index: true
order: 2
category:
  - Guide
---

# OnPostSwitchTeam
This event is triggered after switch_team is triggered.
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnPostSwitchTeam", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|        Key       | Data Type |
| :--------------: | :-------: |
|   `numPlayers`   |   `int`   |
|  `numSpectators` |   `int`   |
|    `avg_rank`    |   `int`   |
|  `numTSlotsFree` |   `int`   |
| `numCTSlotsFree` |   `int`   |
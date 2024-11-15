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
--- @param event Event
--- @return number EventResult
AddEventHandler("OnPostSwitchTeam", function(event)
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
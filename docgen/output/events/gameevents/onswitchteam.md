---
title: OnSwitchTeam
index: true
order: 2
category:
  - Guide
---

# OnSwitchTeam
This event is triggered when switch_team is triggered.
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnSwitchTeam", function(event --[[ Event ]])
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
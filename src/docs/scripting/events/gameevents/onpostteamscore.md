---
title: OnPostTeamScore
index: true
order: 2
category:
  - Guide
---

# OnPostTeamScore
This event is triggered after team_score is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number EventResult
AddEventHandler("OnPostTeamScore", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
| `teamid` |   `int`   |
|  `score` |   `int`   |
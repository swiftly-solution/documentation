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
@event returns void
AddEventHandler("OnPostTeamScore", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
| `teamid` |   `int`   |
|  `score` |   `int`   |
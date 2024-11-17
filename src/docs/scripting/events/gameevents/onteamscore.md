---
title: OnTeamScore
index: true
order: 2
category:
  - Guide
---

# OnTeamScore
This event is triggered when team_score is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number|nil EventResult
AddEventHandler("OnTeamScore", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
| `teamid` |   `int`   |
|  `score` |   `int`   |
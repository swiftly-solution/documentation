---
title: OnTeamScore
index: true
order: 2
category:
  - Guide
---

# OnTeamScore
This event is triggered when team score changed
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnTeamScore", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
| `teamid` |   `int`   |
|  `score` |   `int`   |
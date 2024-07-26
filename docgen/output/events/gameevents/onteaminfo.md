---
title: OnTeamInfo
index: true
order: 2
category:
  - Guide
---

# OnTeamInfo
This event is triggered when team_info is triggered.
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnTeamInfo", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|     Key    | Data Type |
| :--------: | :-------: |
|  `teamid`  |   `int`   |
| `teamname` |  `string` |
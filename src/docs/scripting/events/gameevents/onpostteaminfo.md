---
title: OnPostTeamInfo
index: true
order: 2
category:
  - Guide
---

# OnPostTeamInfo
This event is triggered after team_info is triggered.
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnPostTeamInfo", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|     Key    | Data Type |
| :--------: | :-------: |
|  `teamid`  |   `int`   |
| `teamname` |  `string` |
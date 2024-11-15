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
--- @param event Event
--- @return number EventResult
AddEventHandler("OnPostTeamInfo", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|     Key    | Data Type |
| :--------: | :-------: |
|  `teamid`  |   `int`   |
| `teamname` |  `string` |
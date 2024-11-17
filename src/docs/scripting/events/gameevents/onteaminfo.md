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
--- @param event Event
--- @return number|nil EventResult
AddEventHandler("OnTeamInfo", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|     Key    | Data Type |
| :--------: | :-------: |
|  `teamid`  |   `int`   |
| `teamname` |  `string` |
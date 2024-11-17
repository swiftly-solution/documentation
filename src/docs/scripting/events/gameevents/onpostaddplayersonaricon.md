---
title: OnPostAddPlayerSonarIcon
index: true
order: 2
category:
  - Guide
---

# OnPostAddPlayerSonarIcon
This event is triggered after add_player_sonar_icon is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number|nil EventResult
AddEventHandler("OnPostAddPlayerSonarIcon", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
| `userid` |   `int`   |
|  `pos_x` |  `float`  |
|  `pos_y` |  `float`  |
|  `pos_z` |  `float`  |
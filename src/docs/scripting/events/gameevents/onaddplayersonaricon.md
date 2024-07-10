---
title: OnAddPlayerSonarIcon
index: true
order: 2
category:
  - Guide
---

# OnAddPlayerSonarIcon
This event is triggered when add_player_sonar_icon is triggered
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnAddPlayerSonarIcon", function(event --[[ Event ]])
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
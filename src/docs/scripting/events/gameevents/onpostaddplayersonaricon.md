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
@event returns void
AddEventHandler("OnPostAddPlayerSonarIcon", function(event --[[ Event ]])
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
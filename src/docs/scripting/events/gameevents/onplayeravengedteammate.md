---
title: OnPlayerAvengedTeammate
index: true
order: 2
category:
  - Guide
---

# OnPlayerAvengedTeammate
This event is triggered when player_avenged_teammate is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number|nil EventResult
AddEventHandler("OnPlayerAvengedTeammate", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|         Key         | Data Type |
| :-----------------: | :-------: |
|     `avenger_id`    |   `int`   |
| `avenged_player_id` |   `int`   |
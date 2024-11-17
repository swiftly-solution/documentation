---
title: OnPostPlayerAvengedTeammate
index: true
order: 2
category:
  - Guide
---

# OnPostPlayerAvengedTeammate
This event is triggered after player_avenged_teammate is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number|nil EventResult
AddEventHandler("OnPostPlayerAvengedTeammate", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|         Key         | Data Type |
| :-----------------: | :-------: |
|     `avenger_id`    |   `int`   |
| `avenged_player_id` |   `int`   |
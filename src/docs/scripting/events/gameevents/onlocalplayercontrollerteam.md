---
title: OnLocalPlayerControllerTeam
index: true
order: 2
category:
  - Guide
---

# OnLocalPlayerControllerTeam
This event is triggered when local_player_controller_team is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number|nil EventResult
AddEventHandler("OnLocalPlayerControllerTeam", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |
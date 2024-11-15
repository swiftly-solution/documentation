---
title: OnPostLocalPlayerControllerTeam
index: true
order: 2
category:
  - Guide
---

# OnPostLocalPlayerControllerTeam
This event is triggered after local_player_controller_team is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number EventResult
AddEventHandler("OnPostLocalPlayerControllerTeam", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |
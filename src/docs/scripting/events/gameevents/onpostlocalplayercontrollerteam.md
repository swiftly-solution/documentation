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
@event returns void
AddEventHandler("OnPostLocalPlayerControllerTeam", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |
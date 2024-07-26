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
@event returns void
AddEventHandler("OnLocalPlayerControllerTeam", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |
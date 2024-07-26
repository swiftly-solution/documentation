---
title: OnLocalPlayerTeam
index: true
order: 2
category:
  - Guide
---

# OnLocalPlayerTeam
This event is triggered when local_player_team is triggered.
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnLocalPlayerTeam", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |
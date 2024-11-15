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
--- @param event Event
--- @return number EventResult
AddEventHandler("OnLocalPlayerTeam", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |
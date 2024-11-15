---
title: OnPostLocalPlayerTeam
index: true
order: 2
category:
  - Guide
---

# OnPostLocalPlayerTeam
This event is triggered after local_player_team is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number EventResult
AddEventHandler("OnPostLocalPlayerTeam", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |
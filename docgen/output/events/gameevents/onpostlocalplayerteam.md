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
@event returns void
AddEventHandler("OnPostLocalPlayerTeam", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |
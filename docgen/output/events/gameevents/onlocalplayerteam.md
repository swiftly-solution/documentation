---
title: OnLocalPlayerTeam
index: true
order: 2
category:
  - Guide
---

# OnLocalPlayerTeam
This event is triggered when sent only on the client for the local player - happens only after a local players pawn team variable has been updated
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
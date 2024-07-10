---
title: OnLocalPlayerControllerTeam
index: true
order: 2
category:
  - Guide
---

# OnLocalPlayerControllerTeam
This event is triggered when sent only on the client for the local player - happens only after the local players controller team variable has been updated
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
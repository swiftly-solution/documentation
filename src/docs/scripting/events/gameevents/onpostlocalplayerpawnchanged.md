---
title: OnPostLocalPlayerPawnChanged
index: true
order: 2
category:
  - Guide
---

# OnPostLocalPlayerPawnChanged
This event is triggered after local_player_pawn_changed is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number EventResult
AddEventHandler("OnPostLocalPlayerPawnChanged", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |
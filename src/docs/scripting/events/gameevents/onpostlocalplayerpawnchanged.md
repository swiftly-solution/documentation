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
@event returns void
AddEventHandler("OnPostLocalPlayerPawnChanged", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |
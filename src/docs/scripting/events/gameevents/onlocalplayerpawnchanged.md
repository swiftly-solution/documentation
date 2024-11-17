---
title: OnLocalPlayerPawnChanged
index: true
order: 2
category:
  - Guide
---

# OnLocalPlayerPawnChanged
This event is triggered when local_player_pawn_changed is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number|nil EventResult
AddEventHandler("OnLocalPlayerPawnChanged", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |
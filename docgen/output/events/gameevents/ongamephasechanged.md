---
title: OnGamePhaseChanged
index: true
order: 2
category:
  - Guide
---

# OnGamePhaseChanged
This event is triggered when game_phase_changed is triggered
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnGamePhaseChanged", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|     Key     | Data Type |
| :---------: | :-------: |
| `new_phase` |   `int`   |
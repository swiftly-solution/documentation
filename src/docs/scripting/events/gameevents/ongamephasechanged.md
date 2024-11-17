---
title: OnGamePhaseChanged
index: true
order: 2
category:
  - Guide
---

# OnGamePhaseChanged
This event is triggered when game_phase_changed is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number|nil EventResult
AddEventHandler("OnGamePhaseChanged", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|     Key     | Data Type |
| :---------: | :-------: |
| `new_phase` |   `int`   |
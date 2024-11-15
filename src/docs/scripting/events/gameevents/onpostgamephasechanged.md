---
title: OnPostGamePhaseChanged
index: true
order: 2
category:
  - Guide
---

# OnPostGamePhaseChanged
This event is triggered after game_phase_changed is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number EventResult
AddEventHandler("OnPostGamePhaseChanged", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|     Key     | Data Type |
| :---------: | :-------: |
| `new_phase` |   `int`   |
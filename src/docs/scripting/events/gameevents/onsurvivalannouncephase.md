---
title: OnSurvivalAnnouncePhase
index: true
order: 2
category:
  - Guide
---

# OnSurvivalAnnouncePhase
This event is triggered when survival_announce_phase is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number EventResult
AddEventHandler("OnSurvivalAnnouncePhase", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|   Key   | Data Type |
| :-----: | :-------: |
| `phase` |   `int`   |
---
title: OnPostSurvivalAnnouncePhase
index: true
order: 2
category:
  - Guide
---

# OnPostSurvivalAnnouncePhase
This event is triggered after survival_announce_phase is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number|nil EventResult
AddEventHandler("OnPostSurvivalAnnouncePhase", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|   Key   | Data Type |
| :-----: | :-------: |
| `phase` |   `int`   |
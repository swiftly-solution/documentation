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
@event returns void
AddEventHandler("OnPostSurvivalAnnouncePhase", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|   Key   | Data Type |
| :-----: | :-------: |
| `phase` |   `int`   |
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
@event returns void
AddEventHandler("OnSurvivalAnnouncePhase", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|   Key   | Data Type |
| :-----: | :-------: |
| `phase` |   `int`   |
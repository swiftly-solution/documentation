---
title: OnAnnouncePhaseEnd
index: true
order: 2
category:
  - Guide
---

# OnAnnouncePhaseEnd
This event is triggered when announce_phase_end is triggered
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnAnnouncePhaseEnd", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |
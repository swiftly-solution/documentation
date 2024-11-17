---
title: OnAnnouncePhaseEnd
index: true
order: 2
category:
  - Guide
---

# OnAnnouncePhaseEnd
This event is triggered when announce_phase_end is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number|nil EventResult
AddEventHandler("OnAnnouncePhaseEnd", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |
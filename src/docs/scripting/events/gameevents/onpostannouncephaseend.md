---
title: OnPostAnnouncePhaseEnd
index: true
order: 2
category:
  - Guide
---

# OnPostAnnouncePhaseEnd
This event is triggered after announce_phase_end is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number|nil EventResult
AddEventHandler("OnPostAnnouncePhaseEnd", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |
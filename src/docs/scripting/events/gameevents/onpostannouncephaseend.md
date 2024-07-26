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
@event returns void
AddEventHandler("OnPostAnnouncePhaseEnd", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |
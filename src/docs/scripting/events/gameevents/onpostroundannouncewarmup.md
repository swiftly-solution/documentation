---
title: OnPostRoundAnnounceWarmup
index: true
order: 2
category:
  - Guide
---

# OnPostRoundAnnounceWarmup
This event is triggered after round_announce_warmup is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number|nil EventResult
AddEventHandler("OnPostRoundAnnounceWarmup", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |
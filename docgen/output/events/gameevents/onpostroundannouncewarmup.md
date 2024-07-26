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
@event returns void
AddEventHandler("OnPostRoundAnnounceWarmup", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |
---
title: OnRoundAnnounceWarmup
index: true
order: 2
category:
  - Guide
---

# OnRoundAnnounceWarmup
This event is triggered when round_announce_warmup is triggered
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnRoundAnnounceWarmup", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |
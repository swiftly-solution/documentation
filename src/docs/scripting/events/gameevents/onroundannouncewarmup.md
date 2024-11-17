---
title: OnRoundAnnounceWarmup
index: true
order: 2
category:
  - Guide
---

# OnRoundAnnounceWarmup
This event is triggered when round_announce_warmup is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number|nil EventResult
AddEventHandler("OnRoundAnnounceWarmup", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |
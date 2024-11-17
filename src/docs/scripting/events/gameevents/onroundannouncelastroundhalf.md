---
title: OnRoundAnnounceLastRoundHalf
index: true
order: 2
category:
  - Guide
---

# OnRoundAnnounceLastRoundHalf
This event is triggered when round_announce_last_round_half is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number|nil EventResult
AddEventHandler("OnRoundAnnounceLastRoundHalf", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |
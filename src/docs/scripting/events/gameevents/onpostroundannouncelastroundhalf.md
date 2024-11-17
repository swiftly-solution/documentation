---
title: OnPostRoundAnnounceLastRoundHalf
index: true
order: 2
category:
  - Guide
---

# OnPostRoundAnnounceLastRoundHalf
This event is triggered after round_announce_last_round_half is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number|nil EventResult
AddEventHandler("OnPostRoundAnnounceLastRoundHalf", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |
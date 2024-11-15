---
title: OnPostRoundAnnounceMatchPoint
index: true
order: 2
category:
  - Guide
---

# OnPostRoundAnnounceMatchPoint
This event is triggered after round_announce_match_point is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number EventResult
AddEventHandler("OnPostRoundAnnounceMatchPoint", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |
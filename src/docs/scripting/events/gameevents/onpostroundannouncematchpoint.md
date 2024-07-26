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
@event returns void
AddEventHandler("OnPostRoundAnnounceMatchPoint", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |
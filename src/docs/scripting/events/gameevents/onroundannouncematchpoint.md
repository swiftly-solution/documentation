---
title: OnRoundAnnounceMatchPoint
index: true
order: 2
category:
  - Guide
---

# OnRoundAnnounceMatchPoint
This event is triggered when round_announce_match_point is triggered.
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnRoundAnnounceMatchPoint", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |
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
@event returns void
AddEventHandler("OnPostRoundAnnounceLastRoundHalf", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |
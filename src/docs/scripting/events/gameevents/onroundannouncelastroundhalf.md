---
title: OnRoundAnnounceLastRoundHalf
index: true
order: 2
category:
  - Guide
---

# OnRoundAnnounceLastRoundHalf
This event is triggered when round_announce_last_round_half is triggered
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnRoundAnnounceLastRoundHalf", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |
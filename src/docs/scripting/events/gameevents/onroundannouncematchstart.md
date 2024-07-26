---
title: OnRoundAnnounceMatchStart
index: true
order: 2
category:
  - Guide
---

# OnRoundAnnounceMatchStart
This event is triggered when round_announce_match_start is triggered.
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnRoundAnnounceMatchStart", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |
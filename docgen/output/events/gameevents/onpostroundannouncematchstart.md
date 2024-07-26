---
title: OnPostRoundAnnounceMatchStart
index: true
order: 2
category:
  - Guide
---

# OnPostRoundAnnounceMatchStart
This event is triggered after round_announce_match_start is triggered.
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnPostRoundAnnounceMatchStart", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |
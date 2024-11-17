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
--- @param event Event
--- @return number|nil EventResult
AddEventHandler("OnPostRoundAnnounceMatchStart", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |
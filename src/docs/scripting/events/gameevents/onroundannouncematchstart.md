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
--- @param event Event
--- @return number EventResult
AddEventHandler("OnRoundAnnounceMatchStart", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |
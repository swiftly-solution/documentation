---
title: OnPostRoundOfficiallyEnded
index: true
order: 2
category:
  - Guide
---

# OnPostRoundOfficiallyEnded
This event is triggered after round_officially_ended is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number|nil EventResult
AddEventHandler("OnPostRoundOfficiallyEnded", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |
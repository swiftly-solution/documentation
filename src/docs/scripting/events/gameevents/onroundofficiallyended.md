---
title: OnRoundOfficiallyEnded
index: true
order: 2
category:
  - Guide
---

# OnRoundOfficiallyEnded
This event is triggered when round_officially_ended is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number|nil EventResult
AddEventHandler("OnRoundOfficiallyEnded", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |
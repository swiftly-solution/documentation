---
title: OnRoundTimeWarning
index: true
order: 2
category:
  - Guide
---

# OnRoundTimeWarning
This event is triggered when round_time_warning is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number EventResult
AddEventHandler("OnRoundTimeWarning", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |
---
title: OnPostRoundTimeWarning
index: true
order: 2
category:
  - Guide
---

# OnPostRoundTimeWarning
This event is triggered after round_time_warning is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number EventResult
AddEventHandler("OnPostRoundTimeWarning", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |
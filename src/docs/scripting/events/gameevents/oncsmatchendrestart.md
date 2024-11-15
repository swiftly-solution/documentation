---
title: OnCsMatchEndRestart
index: true
order: 2
category:
  - Guide
---

# OnCsMatchEndRestart
This event is triggered when cs_match_end_restart is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number EventResult
AddEventHandler("OnCsMatchEndRestart", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |
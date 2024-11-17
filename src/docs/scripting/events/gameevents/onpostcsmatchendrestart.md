---
title: OnPostCsMatchEndRestart
index: true
order: 2
category:
  - Guide
---

# OnPostCsMatchEndRestart
This event is triggered after cs_match_end_restart is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number|nil EventResult
AddEventHandler("OnPostCsMatchEndRestart", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |
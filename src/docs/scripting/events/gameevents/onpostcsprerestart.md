---
title: OnPostCsPreRestart
index: true
order: 2
category:
  - Guide
---

# OnPostCsPreRestart
This event is triggered after cs_pre_restart is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number|nil EventResult
AddEventHandler("OnPostCsPreRestart", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |
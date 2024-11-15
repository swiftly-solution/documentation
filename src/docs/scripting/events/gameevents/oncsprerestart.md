---
title: OnCsPreRestart
index: true
order: 2
category:
  - Guide
---

# OnCsPreRestart
This event is triggered when cs_pre_restart is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number EventResult
AddEventHandler("OnCsPreRestart", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |
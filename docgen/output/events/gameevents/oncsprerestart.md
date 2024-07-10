---
title: OnCsPreRestart
index: true
order: 2
category:
  - Guide
---

# OnCsPreRestart
This event is triggered when cs_pre_restart is triggered
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnCsPreRestart", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |
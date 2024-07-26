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
@event returns void
AddEventHandler("OnPostCsPreRestart", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |
---
title: OnCsMatchEndRestart
index: true
order: 2
category:
  - Guide
---

# OnCsMatchEndRestart
This event is triggered when cs_match_end_restart is triggered
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnCsMatchEndRestart", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |
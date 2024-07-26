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
@event returns void
AddEventHandler("OnPostCsMatchEndRestart", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |
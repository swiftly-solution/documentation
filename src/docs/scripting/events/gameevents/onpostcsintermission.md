---
title: OnPostCsIntermission
index: true
order: 2
category:
  - Guide
---

# OnPostCsIntermission
This event is triggered after cs_intermission is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number|nil EventResult
AddEventHandler("OnPostCsIntermission", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |
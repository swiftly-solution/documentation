---
title: OnCsIntermission
index: true
order: 2
category:
  - Guide
---

# OnCsIntermission
This event is triggered when cs_intermission is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number|nil EventResult
AddEventHandler("OnCsIntermission", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |
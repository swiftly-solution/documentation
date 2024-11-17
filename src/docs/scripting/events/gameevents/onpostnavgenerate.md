---
title: OnPostNavGenerate
index: true
order: 2
category:
  - Guide
---

# OnPostNavGenerate
This event is triggered after nav_generate is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number|nil EventResult
AddEventHandler("OnPostNavGenerate", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |
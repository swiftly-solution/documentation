---
title: OnNavGenerate
index: true
order: 2
category:
  - Guide
---

# OnNavGenerate
This event is triggered when nav_generate is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number EventResult
AddEventHandler("OnNavGenerate", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |
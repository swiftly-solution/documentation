---
title: OnNavGenerate
index: true
order: 2
category:
  - Guide
---

# OnNavGenerate
This event is triggered when nav_generate is triggered
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnNavGenerate", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |
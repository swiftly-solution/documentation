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
@event returns void
AddEventHandler("OnPostNavGenerate", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |
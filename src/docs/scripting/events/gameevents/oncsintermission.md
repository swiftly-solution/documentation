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
@event returns void
AddEventHandler("OnCsIntermission", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |
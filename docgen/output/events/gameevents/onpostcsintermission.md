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
@event returns void
AddEventHandler("OnPostCsIntermission", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |
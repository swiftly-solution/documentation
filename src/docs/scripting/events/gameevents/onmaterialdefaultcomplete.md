---
title: OnMaterialDefaultComplete
index: true
order: 2
category:
  - Guide
---

# OnMaterialDefaultComplete
This event is triggered when material_default_complete is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number EventResult
AddEventHandler("OnMaterialDefaultComplete", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |
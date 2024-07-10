---
title: OnMaterialDefaultComplete
index: true
order: 2
category:
  - Guide
---

# OnMaterialDefaultComplete
This event is triggered when material_default_complete is triggered
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnMaterialDefaultComplete", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |
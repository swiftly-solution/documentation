---
title: OnPostMaterialDefaultComplete
index: true
order: 2
category:
  - Guide
---

# OnPostMaterialDefaultComplete
This event is triggered after material_default_complete is triggered.
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnPostMaterialDefaultComplete", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |
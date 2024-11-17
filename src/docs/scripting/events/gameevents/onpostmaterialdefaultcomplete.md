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
--- @param event Event
--- @return number|nil EventResult
AddEventHandler("OnPostMaterialDefaultComplete", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |
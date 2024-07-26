---
title: OnItemSchemaInitialized
index: true
order: 2
category:
  - Guide
---

# OnItemSchemaInitialized
This event is triggered when item_schema_initialized is triggered.
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnItemSchemaInitialized", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |
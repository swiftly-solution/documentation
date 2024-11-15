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
--- @param event Event
--- @return number EventResult
AddEventHandler("OnItemSchemaInitialized", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |
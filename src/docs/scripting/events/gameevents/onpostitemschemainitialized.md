---
title: OnPostItemSchemaInitialized
index: true
order: 2
category:
  - Guide
---

# OnPostItemSchemaInitialized
This event is triggered after item_schema_initialized is triggered.
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnPostItemSchemaInitialized", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |
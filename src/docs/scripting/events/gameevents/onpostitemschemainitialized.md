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
--- @param event Event
--- @return number|nil EventResult
AddEventHandler("OnPostItemSchemaInitialized", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |
---
title: OnPostStorePricesheetUpdated
index: true
order: 2
category:
  - Guide
---

# OnPostStorePricesheetUpdated
This event is triggered after store_pricesheet_updated is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number|nil EventResult
AddEventHandler("OnPostStorePricesheetUpdated", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |
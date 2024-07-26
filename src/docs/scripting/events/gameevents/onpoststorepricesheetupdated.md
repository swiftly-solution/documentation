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
@event returns void
AddEventHandler("OnPostStorePricesheetUpdated", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |
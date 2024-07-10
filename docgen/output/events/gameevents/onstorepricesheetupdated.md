---
title: OnStorePricesheetUpdated
index: true
order: 2
category:
  - Guide
---

# OnStorePricesheetUpdated
This event is triggered when store_pricesheet_updated is triggered
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnStorePricesheetUpdated", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |
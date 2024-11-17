---
title: OnStorePricesheetUpdated
index: true
order: 2
category:
  - Guide
---

# OnStorePricesheetUpdated
This event is triggered when store_pricesheet_updated is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number|nil EventResult
AddEventHandler("OnStorePricesheetUpdated", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |
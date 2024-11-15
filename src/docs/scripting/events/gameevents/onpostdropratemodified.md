---
title: OnPostDropRateModified
index: true
order: 2
category:
  - Guide
---

# OnPostDropRateModified
This event is triggered after drop_rate_modified is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number EventResult
AddEventHandler("OnPostDropRateModified", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |
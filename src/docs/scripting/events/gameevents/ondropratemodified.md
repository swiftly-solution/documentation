---
title: OnDropRateModified
index: true
order: 2
category:
  - Guide
---

# OnDropRateModified
This event is triggered when drop_rate_modified is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number|nil EventResult
AddEventHandler("OnDropRateModified", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |
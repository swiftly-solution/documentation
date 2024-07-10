---
title: OnDropRateModified
index: true
order: 2
category:
  - Guide
---

# OnDropRateModified
This event is triggered when drop_rate_modified is triggered
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnDropRateModified", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |
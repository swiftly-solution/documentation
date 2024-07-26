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
@event returns void
AddEventHandler("OnPostDropRateModified", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |
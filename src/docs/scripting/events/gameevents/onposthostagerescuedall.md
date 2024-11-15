---
title: OnPostHostageRescuedAll
index: true
order: 2
category:
  - Guide
---

# OnPostHostageRescuedAll
This event is triggered after hostage_rescued_all is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number EventResult
AddEventHandler("OnPostHostageRescuedAll", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |
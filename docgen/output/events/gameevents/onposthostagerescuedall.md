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
@event returns void
AddEventHandler("OnPostHostageRescuedAll", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |
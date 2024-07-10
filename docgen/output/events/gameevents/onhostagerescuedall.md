---
title: OnHostageRescuedAll
index: true
order: 2
category:
  - Guide
---

# OnHostageRescuedAll
This event is triggered when hostage_rescued_all is triggered
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnHostageRescuedAll", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |
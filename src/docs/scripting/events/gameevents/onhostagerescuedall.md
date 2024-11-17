---
title: OnHostageRescuedAll
index: true
order: 2
category:
  - Guide
---

# OnHostageRescuedAll
This event is triggered when hostage_rescued_all is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number|nil EventResult
AddEventHandler("OnHostageRescuedAll", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |
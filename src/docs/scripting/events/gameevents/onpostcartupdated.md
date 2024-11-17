---
title: OnPostCartUpdated
index: true
order: 2
category:
  - Guide
---

# OnPostCartUpdated
This event is triggered after cart_updated is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number|nil EventResult
AddEventHandler("OnPostCartUpdated", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |
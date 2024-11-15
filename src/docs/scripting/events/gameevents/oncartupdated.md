---
title: OnCartUpdated
index: true
order: 2
category:
  - Guide
---

# OnCartUpdated
This event is triggered when cart_updated is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number EventResult
AddEventHandler("OnCartUpdated", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |
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
@event returns void
AddEventHandler("OnCartUpdated", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |
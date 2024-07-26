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
@event returns void
AddEventHandler("OnPostCartUpdated", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |
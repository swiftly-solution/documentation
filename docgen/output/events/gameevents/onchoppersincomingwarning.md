---
title: OnChoppersIncomingWarning
index: true
order: 2
category:
  - Guide
---

# OnChoppersIncomingWarning
This event is triggered when choppers_incoming_warning is triggered.
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnChoppersIncomingWarning", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
| `global` | `boolean` |
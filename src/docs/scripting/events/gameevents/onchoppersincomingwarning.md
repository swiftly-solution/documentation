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
--- @param event Event
--- @return number EventResult
AddEventHandler("OnChoppersIncomingWarning", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
| `global` | `boolean` |
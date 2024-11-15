---
title: OnPostChoppersIncomingWarning
index: true
order: 2
category:
  - Guide
---

# OnPostChoppersIncomingWarning
This event is triggered after choppers_incoming_warning is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number EventResult
AddEventHandler("OnPostChoppersIncomingWarning", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
| `global` | `boolean` |
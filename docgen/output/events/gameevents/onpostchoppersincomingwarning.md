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
@event returns void
AddEventHandler("OnPostChoppersIncomingWarning", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
| `global` | `boolean` |
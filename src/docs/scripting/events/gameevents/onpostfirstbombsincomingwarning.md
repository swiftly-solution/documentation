---
title: OnPostFirstbombsIncomingWarning
index: true
order: 2
category:
  - Guide
---

# OnPostFirstbombsIncomingWarning
This event is triggered after firstbombs_incoming_warning is triggered.
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnPostFirstbombsIncomingWarning", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
| `global` | `boolean` |
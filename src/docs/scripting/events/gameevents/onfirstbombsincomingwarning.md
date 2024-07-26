---
title: OnFirstbombsIncomingWarning
index: true
order: 2
category:
  - Guide
---

# OnFirstbombsIncomingWarning
This event is triggered when firstbombs_incoming_warning is triggered.
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnFirstbombsIncomingWarning", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
| `global` | `boolean` |
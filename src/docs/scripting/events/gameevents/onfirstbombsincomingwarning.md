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
--- @param event Event
--- @return number EventResult
AddEventHandler("OnFirstbombsIncomingWarning", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
| `global` | `boolean` |
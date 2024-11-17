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
--- @param event Event
--- @return number|nil EventResult
AddEventHandler("OnPostFirstbombsIncomingWarning", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
| `global` | `boolean` |
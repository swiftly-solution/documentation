---
title: OnPostTeamchangePending
index: true
order: 2
category:
  - Guide
---

# OnPostTeamchangePending
This event is triggered after teamchange_pending is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number|nil EventResult
AddEventHandler("OnPostTeamchangePending", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
| `userid` |   `int`   |
| `toteam` |   `int`   |
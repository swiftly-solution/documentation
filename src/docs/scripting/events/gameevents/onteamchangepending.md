---
title: OnTeamchangePending
index: true
order: 2
category:
  - Guide
---

# OnTeamchangePending
This event is triggered when teamchange_pending is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number|nil EventResult
AddEventHandler("OnTeamchangePending", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
| `userid` |   `int`   |
| `toteam` |   `int`   |
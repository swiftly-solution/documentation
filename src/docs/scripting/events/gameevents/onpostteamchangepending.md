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
@event returns void
AddEventHandler("OnPostTeamchangePending", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
| `userid` |   `int`   |
| `toteam` |   `int`   |
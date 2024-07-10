---
title: OnTeamchangePending
index: true
order: 2
category:
  - Guide
---

# OnTeamchangePending
This event is triggered when teamchange_pending is triggered
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnTeamchangePending", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
| `userid` |   `int`   |
| `toteam` |   `int`   |
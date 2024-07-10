---
title: OnEnableRestartVoting
index: true
order: 2
category:
  - Guide
---

# OnEnableRestartVoting
This event is triggered when enable_restart_voting is triggered
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnEnableRestartVoting", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
| `enable` | `boolean` |
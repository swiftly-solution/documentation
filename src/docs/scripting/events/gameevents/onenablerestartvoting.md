---
title: OnEnableRestartVoting
index: true
order: 2
category:
  - Guide
---

# OnEnableRestartVoting
This event is triggered when enable_restart_voting is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number|nil EventResult
AddEventHandler("OnEnableRestartVoting", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
| `enable` | `boolean` |
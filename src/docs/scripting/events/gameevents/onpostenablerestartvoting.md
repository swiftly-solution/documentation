---
title: OnPostEnableRestartVoting
index: true
order: 2
category:
  - Guide
---

# OnPostEnableRestartVoting
This event is triggered after enable_restart_voting is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number|nil EventResult
AddEventHandler("OnPostEnableRestartVoting", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
| `enable` | `boolean` |
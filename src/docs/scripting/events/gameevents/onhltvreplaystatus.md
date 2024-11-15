---
title: OnHltvReplayStatus
index: true
order: 2
category:
  - Guide
---

# OnHltvReplayStatus
This event is triggered when hltv_replay_status is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number EventResult
AddEventHandler("OnHltvReplayStatus", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
| `reason` |   `int`   |
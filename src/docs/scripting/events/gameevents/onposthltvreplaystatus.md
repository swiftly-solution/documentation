---
title: OnPostHltvReplayStatus
index: true
order: 2
category:
  - Guide
---

# OnPostHltvReplayStatus
This event is triggered after hltv_replay_status is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number|nil EventResult
AddEventHandler("OnPostHltvReplayStatus", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
| `reason` |   `int`   |
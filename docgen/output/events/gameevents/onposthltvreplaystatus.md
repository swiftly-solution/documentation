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
@event returns void
AddEventHandler("OnPostHltvReplayStatus", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
| `reason` |   `int`   |
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
@event returns void
AddEventHandler("OnHltvReplayStatus", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
| `reason` |   `int`   |
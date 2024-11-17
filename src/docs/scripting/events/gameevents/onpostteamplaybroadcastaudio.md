---
title: OnPostTeamplayBroadcastAudio
index: true
order: 2
category:
  - Guide
---

# OnPostTeamplayBroadcastAudio
This event is triggered after teamplay_broadcast_audio is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number|nil EventResult
AddEventHandler("OnPostTeamplayBroadcastAudio", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|   Key   | Data Type |
| :-----: | :-------: |
|  `team` |   `int`   |
| `sound` |  `string` |
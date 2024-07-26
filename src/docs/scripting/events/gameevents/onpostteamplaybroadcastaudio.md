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
@event returns void
AddEventHandler("OnPostTeamplayBroadcastAudio", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|   Key   | Data Type |
| :-----: | :-------: |
|  `team` |   `int`   |
| `sound` |  `string` |
---
title: OnTeamplayBroadcastAudio
index: true
order: 2
category:
  - Guide
---

# OnTeamplayBroadcastAudio
This event is triggered when teamplay_broadcast_audio is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number EventResult
AddEventHandler("OnTeamplayBroadcastAudio", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|   Key   | Data Type |
| :-----: | :-------: |
|  `team` |   `int`   |
| `sound` |  `string` |
---
title: OnTeamplayBroadcastAudio
index: true
order: 2
category:
  - Guide
---

# OnTeamplayBroadcastAudio
This event is triggered when emits a sound to everyone on a team
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnTeamplayBroadcastAudio", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|   Key   | Data Type |
| :-----: | :-------: |
|  `team` |   `int`   |
| `sound` |  `string` |
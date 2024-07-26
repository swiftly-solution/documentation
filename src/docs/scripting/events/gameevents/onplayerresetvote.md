---
title: OnPlayerResetVote
index: true
order: 2
category:
  - Guide
---

# OnPlayerResetVote
This event is triggered when player_reset_vote is triggered.
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnPlayerResetVote", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
| `userid` |   `int`   |
|  `vote`  | `boolean` |
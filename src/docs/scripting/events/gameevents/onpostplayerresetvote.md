---
title: OnPostPlayerResetVote
index: true
order: 2
category:
  - Guide
---

# OnPostPlayerResetVote
This event is triggered after player_reset_vote is triggered.
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnPostPlayerResetVote", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
| `userid` |   `int`   |
|  `vote`  | `boolean` |
---
title: OnVoteStarted
index: true
order: 2
category:
  - Guide
---

# OnVoteStarted
This event is triggered when vote_started is triggered.
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnVoteStarted", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|     Key     | Data Type |
| :---------: | :-------: |
|   `issue`   |  `string` |
|   `param1`  |  `string` |
|  `votedata` |  `string` |
|    `team`   |   `int`   |
| `initiator` |   `int`   |
---
title: OnPostVoteStarted
index: true
order: 2
category:
  - Guide
---

# OnPostVoteStarted
This event is triggered after vote_started is triggered.
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnPostVoteStarted", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|     Key     | Data Type |
| :---------: | :-------: |
|   `issue`   |  `string` |
|   `param1`  |  `string` |
|    `team`   |   `int`   |
| `initiator` |   `int`   |
|  `votedata` |  `string` |
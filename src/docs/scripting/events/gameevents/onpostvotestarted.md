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
--- @param event Event
--- @return number|nil EventResult
AddEventHandler("OnPostVoteStarted", function(event)
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
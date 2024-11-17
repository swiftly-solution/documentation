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
--- @param event Event
--- @return number|nil EventResult
AddEventHandler("OnVoteStarted", function(event)
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
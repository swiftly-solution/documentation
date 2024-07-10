---
title: OnStartVote
index: true
order: 2
category:
  - Guide
---

# OnStartVote
This event is triggered when start_vote is triggered
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnStartVote", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|        Key       | Data Type |
| :--------------: | :-------: |
|     `userid`     |   `int`   |
|      `type`      |   `int`   |
| `vote_parameter` |   `int`   |
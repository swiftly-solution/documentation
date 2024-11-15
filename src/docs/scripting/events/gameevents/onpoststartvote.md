---
title: OnPostStartVote
index: true
order: 2
category:
  - Guide
---

# OnPostStartVote
This event is triggered after start_vote is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number EventResult
AddEventHandler("OnPostStartVote", function(event)
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
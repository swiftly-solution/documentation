---
title: OnVoteChanged
index: true
order: 2
category:
  - Guide
---

# OnVoteChanged
This event is triggered when vote_changed is triggered.
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnVoteChanged", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|        Key       | Data Type |
| :--------------: | :-------: |
|    `yesVotes`    |   `int`   |
|     `noVotes`    |   `int`   |
| `potentialVotes` |   `int`   |
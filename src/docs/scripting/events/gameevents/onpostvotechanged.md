---
title: OnPostVoteChanged
index: true
order: 2
category:
  - Guide
---

# OnPostVoteChanged
This event is triggered after vote_changed is triggered.
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnPostVoteChanged", function(event --[[ Event ]])
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
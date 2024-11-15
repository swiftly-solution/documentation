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
--- @param event Event
--- @return number EventResult
AddEventHandler("OnPostVoteChanged", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|        Key       | Data Type |
| :--------------: | :-------: |
|  `vote_option1`  |   `int`   |
|  `vote_option2`  |   `int`   |
|  `vote_option3`  |   `int`   |
|  `vote_option4`  |   `int`   |
|  `vote_option5`  |   `int`   |
| `potentialVotes` |   `int`   |
|    `yesVotes`    |   `int`   |
|     `noVotes`    |   `int`   |
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
--- @param event Event
--- @return number|nil EventResult
AddEventHandler("OnVoteChanged", function(event)
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
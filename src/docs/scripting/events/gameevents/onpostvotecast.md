---
title: OnPostVoteCast
index: true
order: 2
category:
  - Guide
---

# OnPostVoteCast
This event is triggered after vote_cast is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number EventResult
AddEventHandler("OnPostVoteCast", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|      Key      | Data Type |
| :-----------: | :-------: |
| `vote_option` |   `int`   |
|     `team`    |   `int`   |
|    `userid`   |   `int`   |
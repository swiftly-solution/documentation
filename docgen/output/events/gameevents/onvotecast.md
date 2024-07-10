---
title: OnVoteCast
index: true
order: 2
category:
  - Guide
---

# OnVoteCast
This event is triggered when vote_cast is triggered
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnVoteCast", function(event --[[ Event ]])
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
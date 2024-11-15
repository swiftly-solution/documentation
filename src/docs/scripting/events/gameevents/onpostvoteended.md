---
title: OnPostVoteEnded
index: true
order: 2
category:
  - Guide
---

# OnPostVoteEnded
This event is triggered after vote_ended is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number EventResult
AddEventHandler("OnPostVoteEnded", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |
---
title: OnVoteEnded
index: true
order: 2
category:
  - Guide
---

# OnVoteEnded
This event is triggered when vote_ended is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number|nil EventResult
AddEventHandler("OnVoteEnded", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |
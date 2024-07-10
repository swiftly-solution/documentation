---
title: OnVoteEnded
index: true
order: 2
category:
  - Guide
---

# OnVoteEnded
This event is triggered when vote_ended is triggered
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnVoteEnded", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |
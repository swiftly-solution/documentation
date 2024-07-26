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
@event returns void
AddEventHandler("OnPostVoteEnded", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
| Key | Data Type |
| :-: | :-------: |
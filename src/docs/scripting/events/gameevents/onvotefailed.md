---
title: OnVoteFailed
index: true
order: 2
category:
  - Guide
---

# OnVoteFailed
This event is triggered when vote_failed is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number EventResult
AddEventHandler("OnVoteFailed", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|   Key  | Data Type |
| :----: | :-------: |
| `team` |   `int`   |
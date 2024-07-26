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
@event returns void
AddEventHandler("OnVoteFailed", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|   Key  | Data Type |
| :----: | :-------: |
| `team` |   `int`   |
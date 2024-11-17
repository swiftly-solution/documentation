---
title: OnVoteCastNo
index: true
order: 2
category:
  - Guide
---

# OnVoteCastNo
This event is triggered when vote_cast_no is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number|nil EventResult
AddEventHandler("OnVoteCastNo", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|     Key    | Data Type |
| :--------: | :-------: |
|   `team`   |   `int`   |
| `entityid` |   `int`   |
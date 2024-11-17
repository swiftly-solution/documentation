---
title: OnVoteCastYes
index: true
order: 2
category:
  - Guide
---

# OnVoteCastYes
This event is triggered when vote_cast_yes is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number|nil EventResult
AddEventHandler("OnVoteCastYes", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|     Key    | Data Type |
| :--------: | :-------: |
|   `team`   |   `int`   |
| `entityid` |   `int`   |
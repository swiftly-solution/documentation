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
@event returns void
AddEventHandler("OnVoteCastYes", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|     Key    | Data Type |
| :--------: | :-------: |
|   `team`   |   `int`   |
| `entityid` |   `int`   |
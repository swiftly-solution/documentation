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
@event returns void
AddEventHandler("OnVoteCastNo", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|     Key    | Data Type |
| :--------: | :-------: |
|   `team`   |   `int`   |
| `entityid` |   `int`   |
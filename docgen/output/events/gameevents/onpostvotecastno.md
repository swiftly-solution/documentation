---
title: OnPostVoteCastNo
index: true
order: 2
category:
  - Guide
---

# OnPostVoteCastNo
This event is triggered after vote_cast_no is triggered.
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnPostVoteCastNo", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|     Key    | Data Type |
| :--------: | :-------: |
|   `team`   |   `int`   |
| `entityid` |   `int`   |
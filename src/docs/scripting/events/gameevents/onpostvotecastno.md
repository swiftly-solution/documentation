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
--- @param event Event
--- @return number|nil EventResult
AddEventHandler("OnPostVoteCastNo", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|     Key    | Data Type |
| :--------: | :-------: |
|   `team`   |   `int`   |
| `entityid` |   `int`   |
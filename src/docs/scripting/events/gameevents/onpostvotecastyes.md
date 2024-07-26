---
title: OnPostVoteCastYes
index: true
order: 2
category:
  - Guide
---

# OnPostVoteCastYes
This event is triggered after vote_cast_yes is triggered.
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnPostVoteCastYes", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|     Key    | Data Type |
| :--------: | :-------: |
|   `team`   |   `int`   |
| `entityid` |   `int`   |
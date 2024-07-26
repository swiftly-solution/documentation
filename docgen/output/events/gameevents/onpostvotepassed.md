---
title: OnPostVotePassed
index: true
order: 2
category:
  - Guide
---

# OnPostVotePassed
This event is triggered after vote_passed is triggered.
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnPostVotePassed", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key    | Data Type |
| :-------: | :-------: |
| `details` |  `string` |
|  `param1` |  `string` |
|   `team`  |   `int`   |
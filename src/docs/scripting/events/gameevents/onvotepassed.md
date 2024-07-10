---
title: OnVotePassed
index: true
order: 2
category:
  - Guide
---

# OnVotePassed
This event is triggered when vote_passed is triggered
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnVotePassed", function(event --[[ Event ]])
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
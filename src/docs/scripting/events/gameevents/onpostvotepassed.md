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
--- @param event Event
--- @return number EventResult
AddEventHandler("OnPostVotePassed", function(event)
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
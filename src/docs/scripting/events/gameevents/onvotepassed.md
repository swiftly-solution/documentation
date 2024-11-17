---
title: OnVotePassed
index: true
order: 2
category:
  - Guide
---

# OnVotePassed
This event is triggered when vote_passed is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number|nil EventResult
AddEventHandler("OnVotePassed", function(event)
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
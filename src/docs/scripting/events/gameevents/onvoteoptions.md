---
title: OnVoteOptions
index: true
order: 2
category:
  - Guide
---

# OnVoteOptions
This event is triggered when vote_options is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number EventResult
AddEventHandler("OnVoteOptions", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key    | Data Type |
| :-------: | :-------: |
|  `count`  |   `int`   |
| `option1` |  `string` |
| `option2` |  `string` |
| `option3` |  `string` |
| `option4` |  `string` |
| `option5` |  `string` |
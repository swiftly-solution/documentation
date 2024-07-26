---
title: OnPostVoteOptions
index: true
order: 2
category:
  - Guide
---

# OnPostVoteOptions
This event is triggered after vote_options is triggered.
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnPostVoteOptions", function(event --[[ Event ]])
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
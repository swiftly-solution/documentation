---
title: OnPostRoundEnd
index: true
order: 2
category:
  - Guide
---

# OnPostRoundEnd
This event is triggered after round_end is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number|nil EventResult
AddEventHandler("OnPostRoundEnd", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|       Key      | Data Type |
| :------------: | :-------: |
|    `winner`    |   `int`   |
|    `reason`    |   `int`   |
|    `message`   |  `string` |
|    `legacy`    |   `int`   |
| `player_count` |   `int`   |
|    `nomusic`   |   `int`   |
|     `time`     |  `float`  |
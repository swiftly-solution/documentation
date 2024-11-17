---
title: OnRoundEnd
index: true
order: 2
category:
  - Guide
---

# OnRoundEnd
This event is triggered when round_end is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number|nil EventResult
AddEventHandler("OnRoundEnd", function(event)
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
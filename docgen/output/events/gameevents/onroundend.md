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
@event returns void
AddEventHandler("OnRoundEnd", function(event --[[ Event ]])
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
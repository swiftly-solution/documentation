---
title: OnBotTakeover
index: true
order: 2
category:
  - Guide
---

# OnBotTakeover
This event is triggered when bot_takeover is triggered.
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnBotTakeover", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
| `userid` |   `int`   |
|  `botid` |   `int`   |
|    `p`   |  `float`  |
|    `y`   |  `float`  |
|    `r`   |  `float`  |
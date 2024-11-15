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
--- @param event Event
--- @return number EventResult
AddEventHandler("OnBotTakeover", function(event)
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
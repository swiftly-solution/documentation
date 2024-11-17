---
title: OnPostBotTakeover
index: true
order: 2
category:
  - Guide
---

# OnPostBotTakeover
This event is triggered after bot_takeover is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number|nil EventResult
AddEventHandler("OnPostBotTakeover", function(event)
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
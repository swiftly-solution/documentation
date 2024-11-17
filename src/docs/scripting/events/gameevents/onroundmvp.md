---
title: OnRoundMvp
index: true
order: 2
category:
  - Guide
---

# OnRoundMvp
This event is triggered when round_mvp is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number|nil EventResult
AddEventHandler("OnRoundMvp", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|       Key      | Data Type |
| :------------: | :-------: |
|    `userid`    |   `int`   |
|    `reason`    |   `int`   |
|     `value`    |   `int`   |
| `musickitmvps` |   `int`   |
|    `nomusic`   |   `int`   |
|  `musickitid`  |   `int`   |
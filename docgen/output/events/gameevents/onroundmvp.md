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
@event returns void
AddEventHandler("OnRoundMvp", function(event --[[ Event ]])
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
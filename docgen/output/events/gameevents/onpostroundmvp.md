---
title: OnPostRoundMvp
index: true
order: 2
category:
  - Guide
---

# OnPostRoundMvp
This event is triggered after round_mvp is triggered.
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnPostRoundMvp", function(event --[[ Event ]])
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
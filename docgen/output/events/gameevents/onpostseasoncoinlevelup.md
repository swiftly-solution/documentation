---
title: OnPostSeasoncoinLevelup
index: true
order: 2
category:
  - Guide
---

# OnPostSeasoncoinLevelup
This event is triggered after seasoncoin_levelup is triggered.
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnPostSeasoncoinLevelup", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|     Key    | Data Type |
| :--------: | :-------: |
|  `userid`  |   `int`   |
| `category` |   `int`   |
|   `rank`   |   `int`   |
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
--- @param event Event
--- @return number EventResult
AddEventHandler("OnPostSeasoncoinLevelup", function(event)
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
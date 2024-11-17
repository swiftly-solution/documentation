---
title: OnSeasoncoinLevelup
index: true
order: 2
category:
  - Guide
---

# OnSeasoncoinLevelup
This event is triggered when seasoncoin_levelup is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number|nil EventResult
AddEventHandler("OnSeasoncoinLevelup", function(event)
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
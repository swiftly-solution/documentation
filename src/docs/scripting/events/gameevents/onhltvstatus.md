---
title: OnHltvStatus
index: true
order: 2
category:
  - Guide
---

# OnHltvStatus
This event is triggered when hltv_status is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number|nil EventResult
AddEventHandler("OnHltvStatus", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key    | Data Type |
| :-------: | :-------: |
| `clients` |   `int`   |
|  `slots`  |   `int`   |
| `proxies` |   `int`   |
|  `master` |  `string` |
---
title: OnPostHltvStatus
index: true
order: 2
category:
  - Guide
---

# OnPostHltvStatus
This event is triggered after hltv_status is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number EventResult
AddEventHandler("OnPostHltvStatus", function(event)
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
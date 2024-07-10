---
title: OnHltvStatus
index: true
order: 2
category:
  - Guide
---

# OnHltvStatus
This event is triggered when general HLTV status
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnHltvStatus", function(event --[[ Event ]])
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
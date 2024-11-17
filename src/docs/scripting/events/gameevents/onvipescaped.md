---
title: OnVipEscaped
index: true
order: 2
category:
  - Guide
---

# OnVipEscaped
This event is triggered when vip_escaped is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number|nil EventResult
AddEventHandler("OnVipEscaped", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
| `userid` |   `int`   |
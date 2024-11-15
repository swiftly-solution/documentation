---
title: OnPostVipEscaped
index: true
order: 2
category:
  - Guide
---

# OnPostVipEscaped
This event is triggered after vip_escaped is triggered.
::: tabs
@tab Lua
```lua
--- @param event Event
--- @return number EventResult
AddEventHandler("OnPostVipEscaped", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
| `userid` |   `int`   |
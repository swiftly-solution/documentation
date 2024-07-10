---
title: OnVipEscaped
index: true
order: 2
category:
  - Guide
---

# OnVipEscaped
This event is triggered when vip_escaped is triggered
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnVipEscaped", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
| `userid` |   `int`   |
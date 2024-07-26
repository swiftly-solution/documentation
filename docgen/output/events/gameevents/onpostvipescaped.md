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
@event returns void
AddEventHandler("OnPostVipEscaped", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|    Key   | Data Type |
| :------: | :-------: |
| `userid` |   `int`   |
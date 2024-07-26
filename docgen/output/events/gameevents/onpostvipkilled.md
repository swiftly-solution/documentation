---
title: OnPostVipKilled
index: true
order: 2
category:
  - Guide
---

# OnPostVipKilled
This event is triggered after vip_killed is triggered.
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnPostVipKilled", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|     Key    | Data Type |
| :--------: | :-------: |
|  `userid`  |   `int`   |
| `attacker` |   `int`   |
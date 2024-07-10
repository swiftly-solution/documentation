---
title: OnVipKilled
index: true
order: 2
category:
  - Guide
---

# OnVipKilled
This event is triggered when vip_killed is triggered
::: tabs
@tab Lua
```lua
@event returns void
AddEventHandler("OnVipKilled", function(event --[[ Event ]])
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|     Key    | Data Type |
| :--------: | :-------: |
|  `userid`  |   `int`   |
| `attacker` |   `int`   |
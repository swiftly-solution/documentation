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
--- @param event Event
--- @return number EventResult
AddEventHandler("OnPostVipKilled", function(event)
    --[[ ... ]]
    return EventResult.Continue
end)
```

:::
|     Key    | Data Type |
| :--------: | :-------: |
|  `userid`  |   `int`   |
| `attacker` |   `int`   |